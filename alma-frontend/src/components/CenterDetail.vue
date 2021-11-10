<template>
  <v-card>
    <v-container>
      <v-row>
        <v-btn icon @click="$emit('close')">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-row>

      <v-row>
        <iframe
          width="100%"
          height="300"
          style="border:0"
          loading="lazy"
          :src="mapsSource">
        </iframe>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card>
            <v-container fluid>
              <div class="d-flex flex-column">
                <span class="primary--text text-subtitle-2">
                  {{ selected.name }}
                </span>

                <span class="secondary--text caption">
                  {{ selected.address }}
                </span>
              </div>

              <div class="black--text">
                <p class="mb-0 caption"
                    v-if="selected.schedule.week">
                  {{ getSchedule }} > {{ selected.schedule.week }}
                </p>

                <p class="mb-0 caption" v-if="selected.schedule.weekend">
                  Sábado > {{ selected.days.saturday ? selected.schedule.weekend : 'No disponible' }}
                  <br>
                  Domingo > {{ selected.days.sunday ? selected.schedule.weekend : 'No disponible' }}
                </p>
              </div>
            </v-container>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="py-0">
          <p class="primary--text mb-0">
            Vacunas Disponibles y Requisitos
          </p>

          <div v-for="(dosis, vaccine) in selected.vaccines"
              :key="`vaccine-${vaccine}`">
            <div v-for="(dosisData, doseName) in dosis"
                :key="`vaccine-${vaccine}-dosis${doseName}`">
              <p class="mb-0 secondary--text subtitle-2">
                {{ formatDose(doseName) }} {{ vaccine }}
              </p>

              <ul class="mb-2 pl-0 caption"
                  style="list-style-type: none;">
                <li v-for="(r, i) in dosisData"
                    :key="`vaccine-${vaccine}-dosis${doseName}-requirement-${i}`">
                    <!-- Get group and requirements -->
                  <div v-if="r.available">
                    <v-icon x-small>
                      mdi-check
                    </v-icon>

                    {{ r.group }} con {{ r.requirement }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </v-col>

        <v-col cols="12" class="pb-0">
          <p class="primary--text mb-0">
            Más Información
          </p>

          <p class="caption"> <!-- Used new method to detect URLs -->
            <span v-html="replaceURLs( selected.observations )"></span>
          </p>
        </v-col>
      </v-row>
    </v-container>

    <div style="height: 8vh;"></div>

    <v-btn x-large color="primary"
        fixed bottom
        @click="openMaps"
        :style="{left: '50%', transform:'translateX(-50%)'}">
      ¡Abrir Mapa!
    </v-btn>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    apiKey: process.env.VUE_APP_GOOGLE_MAPS_APIKEY
  }),

  computed: {
    ...mapGetters(['selected']),

    mapsLatLon() {
      const elements = this.selected.maps.split('/')
      const location = elements[elements.length - 2].slice(1).split(',')
      return `${location[0]},${location[1]}`
    },

    mapsSource() {
      const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}`
      // const mapCenter = `&center=${this.mapsLatLon}`
      const mapQuery = `&q=${this.selected.name}`
      return `${mapUrl}${mapQuery}`
    },

    getSchedule() {
      let start = ''
      let end = ''

      if (this.selected.days.monday) {
        start = 'Lunes'
      } else if (this.selected.days.tuesday) {
        start = 'Martes'
      }

      if (this.selected.days.friday) {
        end = 'Viernes'
      } else if (this.selected.days.thursday) {
        end = 'Jueves'
      }

      return `${start} a ${end}`
    }
  },

  methods: {
    openMaps() {
      window.open(`https://waze.com/ul?q=${this.selected.name}`);
    },

    formatDose(dose) {
      switch (dose) {
        case 'PRIMERA': return '1era'
        case 'SEGUNDA': return '2nda'
        default: return dose
      }
    },      // added method to replace URLs with clickable links
    replaceURLs(message) {
      if(!message) return;
    
      var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
      return message.replace(urlRegex, function (url) {
        var hyperlink = url;
        if (!hyperlink.match('^https?://')) {
          hyperlink = 'http://' + hyperlink;
        }
        return '<a href="' + hyperlink + '" target="_blank" rel="noopener noreferrer">' + url + '</a>'
      });
    }
  }
}
</script>

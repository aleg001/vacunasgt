<template>
  <section>
    <v-app-bar color="primary" dark flat extended fixed>
      <v-btn icon @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>
        Centros de Vacunación
      </v-toolbar-title>

      <template #extension>
        <v-text-field
          label="Buscar"
          v-model="search"
          dark filled outlined dense
          hide-details clearable
          append-icon="mdi-magnify"
          class="mb-2"
        ></v-text-field>
      </template>
    </v-app-bar>

    <div style="height: 13vh;"></div>

    <v-container class="center-list-content">
      <v-data-iterator
          :items="centers"
          :search="search"
          :loading="loading"
          :items-per-page="-1"
          hide-default-footer>
        <template #header="{ items }">
          <v-row justify="space-between" align="center">
            <v-col cols="6" md="4">
              <span>
                Mostrando {{ items.length }} centros
              </span>
            </v-col>

            <v-col cols="6" md="4">
              <v-select
                label="Horario"
                v-model="schedule"
                :items="schedules"
                outlined dense
                hide-details clearable
              ></v-select>
            </v-col>
          </v-row>
        </template>

        <template #default="{ items }">
          <v-row>
            <v-col cols="12"
                v-for="(center, i) in items"
                :key="`center-${i}`">
              <v-card @click="onSelect(center.name)">
                <v-card-title class="justify-space-between py-0 px-0">
                  <!-- <v-container fluid>
                    <v-row>
                      <v-col cols="7" class="pb-0"> -->
                        <v-container fluid class="pb-0">
                          <div class="primary--text text-subtitle-2">
                            {{ center.name }}
                          </div>
                        </v-container>
                      <!-- </v-col>

                      <v-col cols="5" class="text-right pb-0">
                        <span class="secondary--text caption">
                          {{ center.entrance }}
                        </span>
                      </v-col>
                    </v-row>
                  </v-container> -->
                </v-card-title>

                <v-container fluid>
                  <v-row>
                    <v-col cols="6" class="secondary--text">
                      <p v-for="(doses, vaccine) in center.vaccines"
                          :key="`center-${i}-vaccine-${vaccine}`"
                          class="mb-0 caption">
                        {{ vaccine }} - {{ formatDose(doses) }}
                      </p>
                    </v-col>

                    <v-col cols="6" class="d-flex flex-column justify-end black--text text-right">
                      <p class="mb-0 caption"
                          v-if="center.schedule.week">
                        Lun - Vie > {{ center.schedule.week }}
                      </p>

                      <p class="mb-0 caption"
                          v-if="center.schedule.weekend">
                        Sab > {{ center.days.saturday ? center.schedule.weekend : 'No disponible' }}
                        <br>
                        Dom > {{ center.days.sunday ? center.schedule.weekend : 'No disponible' }}
                      </p>
                    </v-col>
                  </v-row>
                </v-container>

                <v-container fluid class="pt-0">
                  <p class="mb-0 primary--text caption">
                    {{ center.entrance }}
                  </p>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </template>

        <template #loading>
          <v-row>
            <v-col cols="12">
              <v-skeleton-loader
                v-for="item in 3"
                v-bind:key="item"
                class="mx-auto"
                max-width="100%"
                height="80px"
                type="card"
                style="margin-bottom: 1vh"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </template>

        <template #no-data>
          <div class="d-flex flex-column align-center my-5">
            <i class="fas fa-hospital-user"
              style="font-size: 72px; color: #c3c1d8"
            ></i>

            <h3>No se encontraron registros</h3>
          </div>
        </template>

        <template #no-results>
          <div class="d-flex flex-column align-center my-5">
            <i class="fas fa-hospital-user"
              style="font-size: 72px; color: #c3c1d8"
            ></i>

            <h3>No se encontraron registros</h3>
          </div>
        </template>
      </v-data-iterator>
    </v-container>

    <v-btn fab small color="primary"
        fixed bottom right
        @click="moveToTop"
        :style="{marginBottom: '65px'}">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>

    <center-list-filters></center-list-filters>
    <site-footer></site-footer>

    <v-dialog
        v-model="detail"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition">
      <center-detail @close="detail = false"></center-detail>
    </v-dialog>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import CenterDetail from '../components/CenterDetail.vue';
import CenterListFilters from '../components/CenterListFilters.vue';
import SiteFooter from '../components/SiteFooter.vue'

export default {
  components: {
    CenterDetail,
    CenterListFilters,
    SiteFooter,
  },

  data: () => ({
    loading: true,
    search: '',
    detail: false,
    schedule: null,
    schedules: [
      { text: 'Entre Semana', value: 'week' },
      { text: 'Fines de Semana', value: 'weekend' },
    ]
  }),

  computed: {
    ...mapGetters({
      '_centers': 'filtered'
    }),

    centers() {
      return this._centers.filter(center => {
        switch (this.schedule) {
          case 'week':
            return !!center.schedule.week

          case 'weekend':
            return !!center.schedule.weekend

          default:
            return true
        }
      })
    }
  },

  methods: {
    ...mapMutations({
      'setSelected': 'SET_SELECTED',
    }),

    formatDose(dose) {
      const mapper = ([key,]) => {
        switch (key) {
          case 'PRIMERA': return '1era'
          case 'SEGUNDA': return '2nda'
          default: return key
        }
      }

      const formatted = Object.entries(dose).map(mapper).toString()
      return formatted
    },

    goBack() {
      this.$router.go(-1)
    },

    onSelect(name) {
      this.setSelected(name)
      this.detail = true
    },

    moveToTop() {
      window.scrollTo({
        top: 0, left: 0,
        behavior: 'smooth'
      });
    },
  }
}
</script>

<style scoped>
.center-list-view {
  color: white !important;
  background-color: #4F4A88 !important;
}

.center-list-content {
  color: #4F4A88 !important;
  background-color: rgb(245, 245, 245) !important;
}
</style>

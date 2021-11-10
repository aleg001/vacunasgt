<template>
  <v-card class="step-card">
    <p class="text-center">
      ¿Que dia de la semana?
    </p>

    <v-container fluid>
      <v-row>
        <v-select
          label="Dia"
          :items = "dias"
          dark color="white"
          background-color="primary"
          single-line flat filled
          rounded clearable hide-details
          class="text-uppercase"
        ></v-select>

        <v-select
          label="Hora"
          :items="horas"
          dark color="white"
          background-color="primary"
          single-line flat filled
          rounded clearable hide-details
          class="my-4 text-uppercase"
        ></v-select>

        <v-btn x-large block rounded
            color="primary"
            class="justify-start"
            @click="all">
          Cualquier Hora
        </v-btn>

        <v-col cols="12" class="pb-0">
          <p class="primary--text mb-0">
            Más Información
          </p>
        

          <p class="caption">
              <!-- URL Detection -->
              <span v-html="replaceURLs(informacion)"></span>
              <br><br>

          </p>
        </v-col>
        
      </v-row>
    </v-container>

    <v-card-actions class="mt-5 px-0 justify-space-between">
      <v-btn color="primary" text large
          @click="$emit('back')"
          style="width: 48%; border: 1px solid #4F4A88">
        <v-icon>mdi-chevron-left</v-icon>
        Atras
      </v-btn>

      <v-btn color="primary" large
          @click="$emit('next')"
          style="width: 48%;">
        Siguiente
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  
</template>

<script>
export default ({
    data : function() {
        return {
            dias : ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],
            horas : ["7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"],
            informacion : "FB Muni: https://www.facebook.com/municomalapa",
            test : ""
        }
    },
    methods: {
        all() {
          this.$emit('next')
        },
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
})

</script>

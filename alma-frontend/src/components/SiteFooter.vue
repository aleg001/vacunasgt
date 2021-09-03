<template>
  <div>
    <section v-if="information" class="information">
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" md="5">
            <section class="text-justify" style="text-align-last: center;">
              <span>
                Esta información es el resultado de la
                <b>unidad, colaboración y empatía </b>
                de cientos de guatemaltecos que nos
                informan y actualizan todos los días.
              </span>
            </section>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <footer :class="white ? 'footer-light' : 'footer-dark'">
      <v-container>
        <v-row justify="center">
          <span class="footer-title text-center">
            Envíanos tu reporte de los centros de vacunación
          </span>
        </v-row>

        <v-row justify="center">
          <v-btn rounded class="btn-update my-5"
              href="https://forms.gle/6sNyTsgiSasjBxX2A"
              target="_blank">
            Enviar Reporte
          </v-btn>
        </v-row>

        <v-row justify="center">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  text class="btn-social" target="_blank"
                  v-bind="attrs" v-on="on"
                  href="https://www.facebook.com/chatbotALMA">
                <i class="fab fa-facebook-f"></i>
              </v-btn>
            </template>

            <span>Facebook</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  text class="btn-social" target="_blank"
                  v-bind="attrs" v-on="on"
                  href="https://www.instagram.com/almaresponde/">
                <i class="fab fa-instagram"></i>
              </v-btn>
            </template>

            <span>Instagram</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  text class="btn-social" target="_blank"
                  v-bind="attrs" v-on="on"
                  href="https://twitter.com/alma_guatemala">
                <i class="fab fa-twitter"></i>
              </v-btn>
            </template>

            <span>Twitter</span>
          </v-tooltip>
        </v-row>
      </v-container>
    </footer>

    <footer>
      <v-divider></v-divider>
      <v-container class="mt-5">
        <v-row justify="center" align="center" class="mb-5">
          <img src="../assets/images/C-09.svg" width="65px"/>
          <div class="mx-5"></div>
          <img src="../assets/images/devintech.png" width="130px"/>
        </v-row>

        <v-row justify="center">
          <p class="primary--text text-center">
            Este es un proyecto de la Fundación Desarrolla Guatemala con apoyo de
            Devintech.
          </p>
        </v-row>
      </v-container>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    information: {
      type: Boolean,
      default: false,
    },

    white: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.information {
  background-color: #4F4A88;
  color: #FFFFFF;
  font-size: 0.9rem;
  padding: 5vh 1.7vh;
}

.footer-title {
  font-size: 1.2rem;
}

.footer-light {
  color: #4F4A88 !important;
  padding: 5vh 0vw;
  bottom: 0;
}

.footer-dark {
  background-color: #4F4A88 !important;
  color: white !important;
  padding: 5vh 0vw;
  bottom: 0;
}

.btn-social {
  margin: 0 0.5rem;
  font-size: 1rem;
}

.footer-light .btn-social {
  color: #4F4A88 !important;
}

.footer-dark .btn-social {
  color: white !important;
}

.footer-light .btn-update {
  border: 2px solid #4F4A88;
  background-color: #4F4A88 !important;
  color: white !important;
}

.footer-dark .btn-update {
  border: 1px solid white;
  background-color: #4F4A88 !important;
  color: white !important;
}
</style>

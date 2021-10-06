<template>
  <div id="navbar" class="spacing-playground pa-6">
    <v-row justify="center" align="center">
      <v-col xl="1" lg="1" md="1" sm="2" cols="2"
          class="d-flex justify-center align-center">
        <img @click="$router.push('/')" src="../assets/images/C-08.svg"
            :width="$vuetify.breakpoint.mobile ? '100%' : '70%'"/>
      </v-col>
      <v-col xl="9" lg="9" md="9" sm="10" cols="10" >
        <h1 v-bind:class="{
              'alma-title-text': !$vuetify.breakpoint.mobile,
              'title-mobile': $vuetify.breakpoint.mobile,
            }">
          Centros de Vacunación en Guatemala
        </h1>
      </v-col>
      <v-col md="2" sm="12" cols="12" class="social-media"
          :class="{ 'social-media-desktop': !$vuetify.breakpoint.mobile }">
        <a href="https://www.facebook.com/chatbotALMA" target="_blank"
          ><i class="fab fa-facebook-f primary--text"></i
        ></a>
        <a href="https://www.instagram.com/almaresponde/" target="_blank"
          ><i class="fab fa-instagram primary--text"></i
        ></a>
        <a href="https://twitter.com/alma_guatemala" target="_blank"
          ><i class="fab fa-twitter primary--text"></i
        ></a>
        <a
          href="https://www.youtube.com/channel/UCQQzNgg4wwwuCz8cl7BxUEQ"
          target="_blank"
          ><i class="fab fa-youtube primary--text"></i
        ></a>
      </v-col>

      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.social-media{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.social-media-desktop .fab {
  font-size: 200%;
}

.alma-title-text{
  color: #4F4A88;
  font-size: 48px;
  text-align: center;
}

.title-mobile {
  font-size: 0.9rem;
  color: #4F4A88;
  text-align: right;
}
</style>

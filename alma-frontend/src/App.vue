<style>
  @import '../src/assets/css/general.css';
  @import '../src/assets/libraries/fontawesome/css/all.css';
</style>
<template>
  <v-app style="background-color: #fffcff;">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  beforeMount(){
    this.$store.dispatch('CENTROS_HORARIOS_VACUNA')

    this.fetchCenters()
  },

  methods: {
    ...mapActions(['fetchCenters'])
  }
};
</script>

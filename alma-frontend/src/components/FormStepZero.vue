<template>
  <v-card class="d-flex flex-column align-center step-card">
    <span class="text-center">
      ¡Hola soy ALMA! Estoy aquí para ayudarte
      a encontrar un centro de vacunación
    </span>

    <v-btn x-large rounded dark
        color="primary"
        class="text-capitalize mt-4 mb-3 btn-find font-weight-thin"
        @click="$emit('next')">
      Buscar mi vacuna
    </v-btn>

    <img :src="require('@/assets/images/ALMA-09.svg')" width="70%">
  </v-card>
</template>

<style scoped>
.btn-find {
  font-size: 1.5rem;
  text-transform: lowercase;
  height: 4rem !important;
}
</style>

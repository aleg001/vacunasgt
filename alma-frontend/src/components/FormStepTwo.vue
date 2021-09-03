<template>
  <v-card class="step-card">
    <p class="text-center">
      ¿Qué vacuna buscas?
    </p>

    <v-container fluid>
      <v-row>
        <v-select
          label="Vacuna"
          :items="vaccines"
          v-model="vaccine"
          dark color="white"
          background-color="primary"
          single-line flat filled
          rounded clearable hide-details
          class="text-uppercase"
        ></v-select>

        <v-select
          label="Dosis"
          :items="doses"
          v-model="dose"
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
          Ver Todos
        </v-btn>
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
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      'vaccines': 'VACUNAS_AVAILABLE',
      'doses': 'DOSIS_AVAILABLE',

      'getVaccine': 'selectedVacuna',
      'getDose': 'selectedDosis',
    }),

    vaccine: {
      get() {
        return this.getVaccine
      },

      set(value) { 
        this.setVaccine(value)
      },
    },

    dose: {
      get() {
        return this.getDose
      },

      set(value) { 
        this.setDose(value)
      },
    },
  },

  methods: {
    ...mapMutations({
      'setVaccine': 'set_selectedVacuna',
      'setDose': 'set_selectedDosis',
    }),

    all() {
      this.vaccine = null
      this.dose = null

      this.$emit('next')
    }
  }
}
</script>

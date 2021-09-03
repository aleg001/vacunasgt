<template>
  <v-card class="step-card">
    <p class="text-center">
      ¿En donde buscas?
    </p>

    <v-container fluid>
      <v-row>
        <v-select
          label="Departamentos"
          :items="departments"
          v-model="department"
          dark color="white"
          background-color="primary"
          single-line flat filled
          rounded clearable hide-details
          class="text-uppercase"
        ></v-select>

        <v-select
          label="Municipios"
          :items="municipalities"
          v-model="municipality"
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
      'departments': 'DEPARTAMENTOS_AVAILABLE',
      'municipalities': 'MUNICIPIOS_AVAILABLE',

      'getDepartment': 'selectedDepartamento',
      'getMunicipality': 'selectedMunicipio',
    }),

    department: {
      get() {
        return this.getDepartment
      },

      set(value) { 
        this.setDepartment(value)
      },
    },

    municipality: {
      get() {
        return this.getMunicipality
      },

      set(value) { 
        this.setMunicipality(value)
      },
    },
  },

  methods: {
    ...mapMutations({
      'setDepartment': 'set_selectedDepartamento',
      'setMunicipality': 'set_selectedMunicipio',
    }),

    all() {
      this.department = null
      this.municipality = null

      this.$emit('next')
    }
  }
}
</script>

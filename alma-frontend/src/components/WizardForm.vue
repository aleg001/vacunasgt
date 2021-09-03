<template>
  <section>
    <v-stepper v-model="step" non-linear
        :max-width="$vuetify.breakpoint.mobile ? '375px' : '500px'"
        :width="$vuetify.breakpoint.mobile ? '375px' : '500px'">
      <v-stepper-header :class="{ 'd-none': step === 0 }">
        <v-stepper-step editable :complete="step > 1" :step="1">
          Ubicación
        </v-stepper-step>

        <v-stepper-step editable :complete="step > 2" :step="2">
          Vacuna
        </v-stepper-step>

        <v-stepper-step editable :complete="step > 3" :step="3">
          Grupo
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="0" class="px-3 pb-0 elevation-24">
          <form-step-zero @next="next"/>
        </v-stepper-content>

        <v-stepper-content step="1" class="px-3 pb-1">
          <form-step-one @next="next" @back="back"/>
        </v-stepper-content>

        <v-stepper-content step="2" class="px-3 pb-1">
          <form-step-two @next="next" @back="back"/>
        </v-stepper-content>

        <v-stepper-content step="3" class="px-3 pb-1">
          <form-step-three @finish="finish" @back="back"/>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </section>
</template>

<script>
import FormStepZero from './FormStepZero.vue';
import FormStepOne from './FormStepOne.vue';
import FormStepTwo from './FormStepTwo.vue';
import FormStepThree from './FormStepThree.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
    FormStepZero,
    FormStepOne,
    FormStepTwo,
    FormStepThree,
  },

  data: () => ({
    step: 0,
  }),

  beforeMount() {
    this.setDepartment(null)
    this.setMunicipality(null)
    this.setVaccine(null)
    this.setDose(null)
    this.setGroup(null)
  },

  methods: {
    ...mapMutations({
      'setDepartment': 'set_selectedDepartamento',
      'setMunicipality': 'set_selectedMunicipio',
      'setVaccine': 'set_selectedVacuna',
      'setDose': 'set_selectedDosis',
      'setGroup': 'set_selectedGrupo',
    }),

    back() {
      this.step = this.step - 1
    },

    next() {
      this.step = this.step + 1
    },

    finish() {
      this.$router.push('dashboard')
    }
  }
}
</script>

<style scoped>
.step-card {
  background-color: white !important;
  color: #4F4A88 !important;
  font-size: 1.1rem;
  font-weight: bold;
}

.v-stepper__header {
  box-shadow: none;
  border-bottom: 1px solid rgb(232, 232, 232);
}
</style>

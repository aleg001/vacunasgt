<template>
  <section>
    <!-- Changed width from 500 to 550 so all steps (including test step) appear in header -->
    <v-stepper v-model="step" non-linear
        :max-width="$vuetify.breakpoint.mobile ? '375px' : '500px'"
        :width="$vuetify.breakpoint.mobile ? '375px' : '500px'">
      <v-stepper-header :class="{ 'd-none': step === 0 }">
        <v-stepper-step editable :complete="step > 1" :step="1">
          Ubicación
        </v-stepper-step>

        <!-- Test step insertion 

        <v-stepper-step editable :complete="step > 1.5" :step="1.5">
          Dia
        </v-stepper-step>        

        test step insertion end -->

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
          <!-- Changed next to halfNext to go into test step -->
          <form-step-one @next="next" @back="back"/>
        </v-stepper-content>

        <!-- Test step insertion

        <v-stepper-content step="1.5" class="px-3 pb-1">
          <form-step-test @next="halfNext" @back="halfBack"/>
        </v-stepper-content>      

        end -->

        <v-stepper-content step="2" class="px-3 pb-1">
          <!-- Changed back to halfBack to go into test step -->
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
// insert test
//import FormStepTest from './FormStepTest.vue';
// end
import FormStepTwo from './FormStepTwo.vue';
import FormStepThree from './FormStepThree.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
    FormStepZero,
    FormStepOne,
    // insert test
    //FormStepTest,
    // end
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
      'setDepartment': 'SET_DEPARTMENT',
      'setMunicipality': 'SET_MUNICIPALITY',
      'setVaccine': 'SET_VACCINE',
      'setDose': 'SET_DOSE',
      'setGroup': 'SET_GROUP',
    }),

    back() {
      this.step = this.step - 1
    },

    /* transition into and out of test step (0.5 increase instead of 1)
    halfNext() {
      this.step = this.step + 0.5
    },

    halfBack() {
      this.step = this.step - 0.5
    },
    end */

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

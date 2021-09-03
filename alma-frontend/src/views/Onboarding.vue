<template>
  <section>
    <wizard-banner></wizard-banner>

    <section class="d-flex justify-center align-center ma-5">
      <wizard-form></wizard-form>
    </section>

    <site-footer information white></site-footer>
  </section>
</template>

<script>
import WizardBanner from '../components/WizardBanner.vue';
import WizardForm from '../components/WizardForm.vue';
import SiteFooter from '../components/SiteFooter.vue';

export default {
  components: {
    WizardBanner,
    WizardForm,
    SiteFooter,
  },
}
</script>

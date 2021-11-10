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

<!--
<blockquote class="twitter-tweet"><p lang="es" dir="ltr">¡Sorpresa, sorpresa! 🚨🤩<br><br>¡Nueva página donde centralizamos toda la información sobre los centros de vacunación en Guatemala! Ahora es más fácil buscar por departamento, municipio, tipo de vacuna y grupo de población. <br><br>Ingresen aquí ➡️ <a href="https://t.co/kvFeoWPNAR">https://t.co/kvFeoWPNAR</a> <a href="https://t.co/hWffZVyHxO">pic.twitter.com/hWffZVyHxO</a></p>&mdash; ALMA Guatemala (@alma_guatemala) <a href="https://twitter.com/alma_guatemala/status/1423042285365760004?ref_src=twsrc%5Etfw">August 4, 2021</a></blockquote> 
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
-->
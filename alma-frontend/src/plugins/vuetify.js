import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#4F4A88",
          secondary: "#863fbf",
          accent: "#F7F3FF",
          error: "#FFFFFF",
        },
      },
    },
});
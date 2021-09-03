<template>
  <v-card class="step-card">
    <p class="text-center">
      ¿A qué grupo perteneces?
    </p>

    <v-container fluid>
      <v-row>
        <v-select
          label="Grupo"
          :items="groups"
          v-model="group"
          dark color="white"
          background-color="primary"
          single-line flat filled
          rounded clearable hide-details
          class="text-uppercase"
        ></v-select>

        <v-btn x-large block rounded
            color="primary"
            class="my-4 justify-start"
            @click="all">
          Ver Todos
        </v-btn>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn x-large
                v-bind="attrs"
                v-on="on"
                color="transparent elevation-0">
            </v-btn>
          </template>
          <span>This is not a easter egg! :3</span>
        </v-tooltip>
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
          @click="$emit('finish')"
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
      'groups': 'GRUPOS_AVAILABLE',
      'getGroup': 'selectedGrupo',
    }),

    group: {
      get() {
        return this.getGroup
      },

      set(value) { 
        this.setGroup(value)
      },
    },
  },

  methods: {
    ...mapMutations({
      'setGroup': 'set_selectedGrupo',
    }),

    all() {
      this.group = null
      this.$emit('finish')
    }
  }
}
</script>

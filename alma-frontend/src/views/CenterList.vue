<template>
  <section class="center-list-view">
    <v-container class="mb-3">
      <v-row justify="space-between" align="center">
        <v-col cols="12" md="4" class="d-flex align-center">
          <v-btn icon dark>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>

          <span class="ml-5">
            Centros de Vacunación
          </span>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            label="Buscar"
            dark
            filled outlined dense
            hide-details clearable
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="center-list-content">
      <v-row justify="space-between" align="center">
        <v-col cols="6" md="4">
          <span>
            Mostrando 60 centros
          </span>
        </v-col>

        <v-col cols="6" md="4">
          <v-select
            label="Horario"
            :items="['Entre Semana', 'Fines de Semana']"
            outlined dense
            hide-details clearable
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="justify-space-between pb-0">
              <span class="primary--text">
                CC PeriRoosevelt
              </span>

              <span class="secondary--text overline">
                Peatonal
              </span>
            </v-card-title>

            <v-container fluid>
              <v-row>
                <v-col cols="6" class="secondary--text caption">
                  <p class="mb-0">
                    Moderna - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Astrazeneca - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Sputnik - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Pfiezer - 1era y 2nda Dosis
                  </p>
                </v-col>

                <v-col cols="6" class="d-flex flex-column justify-end black--text caption text-right">
                  <p class="mb-0">
                    Lun - Vie > 9am - 4pm
                  </p>
                  <p class="mb-0">
                    Sáb - Dom > 9am - 4pm
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="justify-space-between pb-0">
              <span class="primary--text">
                CC PeriRoosevelt
              </span>

              <span class="secondary--text overline">
                Peatonal
              </span>
            </v-card-title>

            <v-container fluid>
              <v-row>
                <v-col cols="6" class="secondary--text caption">
                  <p class="mb-0">
                    Moderna - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Astrazeneca - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Sputnik - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Pfiezer - 1era y 2nda Dosis
                  </p>
                </v-col>

                <v-col cols="6" class="d-flex flex-column justify-end black--text caption text-right">
                  <p class="mb-0">
                    Lun - Vie > 9am - 4pm
                  </p>
                  <p class="mb-0">
                    Sáb - Dom > 9am - 4pm
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="justify-space-between pb-0">
              <span class="primary--text">
                CC PeriRoosevelt
              </span>

              <span class="secondary--text overline">
                Peatonal
              </span>
            </v-card-title>

            <v-container fluid>
              <v-row>
                <v-col cols="6" class="secondary--text caption">
                  <p class="mb-0">
                    Moderna - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Astrazeneca - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Sputnik - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Pfiezer - 1era y 2nda Dosis
                  </p>
                </v-col>

                <v-col cols="6" class="d-flex flex-column justify-end black--text caption text-right">
                  <p class="mb-0">
                    Lun - Vie > 9am - 4pm
                  </p>
                  <p class="mb-0">
                    Sáb - Dom > 9am - 4pm
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="justify-space-between pb-0">
              <span class="primary--text">
                CC PeriRoosevelt
              </span>

              <span class="secondary--text overline">
                Peatonal
              </span>
            </v-card-title>

            <v-container fluid>
              <v-row>
                <v-col cols="6" class="secondary--text caption">
                  <p class="mb-0">
                    Moderna - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Astrazeneca - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Sputnik - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Pfiezer - 1era y 2nda Dosis
                  </p>
                </v-col>

                <v-col cols="6" class="d-flex flex-column justify-end black--text caption text-right">
                  <p class="mb-0">
                    Lun - Vie > 9am - 4pm
                  </p>
                  <p class="mb-0">
                    Sáb - Dom > 9am - 4pm
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="justify-space-between pb-0">
              <span class="primary--text">
                CC PeriRoosevelt
              </span>

              <span class="secondary--text overline">
                Peatonal
              </span>
            </v-card-title>

            <v-container fluid>
              <v-row>
                <v-col cols="6" class="secondary--text caption">
                  <p class="mb-0">
                    Moderna - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Astrazeneca - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Sputnik - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Pfiezer - 1era y 2nda Dosis
                  </p>
                </v-col>

                <v-col cols="6" class="d-flex flex-column justify-end black--text caption text-right">
                  <p class="mb-0">
                    Lun - Vie > 9am - 4pm
                  </p>
                  <p class="mb-0">
                    Sáb - Dom > 9am - 4pm
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="justify-space-between pb-0">
              <span class="primary--text">
                CC PeriRoosevelt
              </span>

              <span class="secondary--text overline">
                Peatonal
              </span>
            </v-card-title>

            <v-container fluid>
              <v-row>
                <v-col cols="6" class="secondary--text caption">
                  <p class="mb-0">
                    Moderna - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Astrazeneca - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Sputnik - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Pfiezer - 1era y 2nda Dosis
                  </p>
                </v-col>

                <v-col cols="6" class="d-flex flex-column justify-end black--text caption text-right">
                  <p class="mb-0">
                    Lun - Vie > 9am - 4pm
                  </p>
                  <p class="mb-0">
                    Sáb - Dom > 9am - 4pm
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="justify-space-between pb-0">
              <span class="primary--text">
                CC PeriRoosevelt
              </span>

              <span class="secondary--text overline">
                Peatonal
              </span>
            </v-card-title>

            <v-container fluid>
              <v-row>
                <v-col cols="6" class="secondary--text caption">
                  <p class="mb-0">
                    Moderna - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Astrazeneca - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Sputnik - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Pfiezer - 1era y 2nda Dosis
                  </p>
                </v-col>

                <v-col cols="6" class="d-flex flex-column justify-end black--text caption text-right">
                  <p class="mb-0">
                    Lun - Vie > 9am - 4pm
                  </p>
                  <p class="mb-0">
                    Sáb - Dom > 9am - 4pm
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="justify-space-between pb-0">
              <span class="primary--text">
                CC PeriRoosevelt
              </span>

              <span class="secondary--text overline">
                Peatonal
              </span>
            </v-card-title>

            <v-container fluid>
              <v-row>
                <v-col cols="6" class="secondary--text caption">
                  <p class="mb-0">
                    Moderna - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Astrazeneca - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Sputnik - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Pfiezer - 1era y 2nda Dosis
                  </p>
                </v-col>

                <v-col cols="6" class="d-flex flex-column justify-end black--text caption text-right">
                  <p class="mb-0">
                    Lun - Vie > 9am - 4pm
                  </p>
                  <p class="mb-0">
                    Sáb - Dom > 9am - 4pm
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="justify-space-between pb-0">
              <span class="primary--text">
                CC PeriRoosevelt
              </span>

              <span class="secondary--text overline">
                Peatonal
              </span>
            </v-card-title>

            <v-container fluid>
              <v-row>
                <v-col cols="6" class="secondary--text caption">
                  <p class="mb-0">
                    Moderna - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Astrazeneca - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Sputnik - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Pfiezer - 1era y 2nda Dosis
                  </p>
                </v-col>

                <v-col cols="6" class="d-flex flex-column justify-end black--text caption text-right">
                  <p class="mb-0">
                    Lun - Vie > 9am - 4pm
                  </p>
                  <p class="mb-0">
                    Sáb - Dom > 9am - 4pm
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="justify-space-between pb-0">
              <span class="primary--text">
                CC PeriRoosevelt
              </span>

              <span class="secondary--text overline">
                Peatonal
              </span>
            </v-card-title>

            <v-container fluid>
              <v-row>
                <v-col cols="6" class="secondary--text caption">
                  <p class="mb-0">
                    Moderna - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Astrazeneca - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Sputnik - 1era y 2nda Dosis
                  </p>
                  <p class="mb-0">
                    Pfiezer - 1era y 2nda Dosis
                  </p>
                </v-col>

                <v-col cols="6" class="d-flex flex-column justify-end black--text caption text-right">
                  <p class="mb-0">
                    Lun - Vie > 9am - 4pm
                  </p>
                  <p class="mb-0">
                    Sáb - Dom > 9am - 4pm
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.center-list-view {
  color: white !important;
  background-color: #4F4A88 !important;
}

.center-list-content {
  color: #4F4A88 !important;
  background-color: rgb(245, 245, 245) !important;
}
</style>

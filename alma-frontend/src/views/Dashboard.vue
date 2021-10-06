  <style>
  @import "../assets/css/dashboard.css";
  </style>
  <template>
    <div id="dashboard">
      <site-navbar></site-navbar>

      <div class="hidden-sm-and-down">
        <div style="padding: 0vh 3vw 0vh 4vw">
          <v-container fluid>
            <v-row>
              <v-col>
                <v-autocomplete
                  xl="3"
                  lg="3"
                  md="3"
                  sm="12"
                  cols="12"
                  id="departamentoList"
                  :items="DEPARTAMENTOS_AVAILABLE"
                  v-model="selectedDepartamento"
                  @click="selectedDepartamento = null"
                  label="Departamentos"
                  :class="{
                    'active-filter': !!selectedDepartamento,
                  }"
                  rounded
                  clearable
                  solo
                ></v-autocomplete>
              </v-col>
              <v-col xl="3" lg="3" md="3" sm="12" cols="12">
                <v-autocomplete
                  id="municipioList"
                  :items="MUNICIPIOS_AVAILABLE"
                  v-model="selectedMunicipio"
                  @click="selectedMunicipio = null"
                  :class="{
                    'active-filter': !!selectedMunicipio,
                  }"
                  rounded
                  solo
                  clearable
                  label="Municipio"
                ></v-autocomplete>
              </v-col>
              <v-col xl="3" lg="3" md="3" sm="12" cols="12">
                <v-autocomplete
                  id="vacunaList"
                  :items="VACUNAS_AVAILABLE"
                  v-model="selectedVacuna"
                  @click="selectedVacuna = null"
                  :class="{
                    'active-filter': !!selectedVacuna,
                  }"
                  rounded
                  solo
                  clearable
                  label="Vacuna"
                ></v-autocomplete>
              </v-col>
              <v-col xl="3" lg="3" md="3" sm="12" cols="12">
                <v-autocomplete
                  id="grupoList"
                  :items="GRUPOS_AVAILABLE"
                  v-model="selectedGrupo"
                  @click="selectedGrupo = null"
                  :class="{
                    'active-filter': !!selectedGrupo,
                  }"
                  rounded
                  solo
                  clearable
                  label="Grupo de población"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <v-expansion-panels
          style="padding: 0vh 3vw 0vh 4vw; margin-bottom: 4vh"
          v-model="panel"
          multiple
        >
          <v-expansion-panel style="background-color: #c3c1d8">
            <v-expansion-panel-header style="color: #4f4a88; font-weight: bolder">
              <label style="font-size: large" for="">Filtros avanzados</label>
              <template v-slot:actions>
                <i class="fas fa-sort"></i>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-container fluid>
                <v-row>
                  <v-col md="4" sm="12" cols="12">
                    <v-autocomplete
                      id="dosisList"
                      :items="DOSIS_AVAILABLE"
                      :class="{
                        'active-filter': !!selectedDosis,
                      }"
                      v-model="selectedDosis"
                      @click="selectedDosis = null"
                      rounded
                      solo
                      clearable
                      label="Dosis"
                    ></v-autocomplete>
                  </v-col>
                  <!-- <v-col md="3" sm="12" cols="12">
                    <v-autocomplete
                      id="requisitoList"
                      :items="jsonRequisitos"
                      item-text="nombre"
                      item-value="nombre"
                      v-on:change="onchangeRequisito"
                      :class="{
                        'active-filter': !!selectedRequisito,
                      }"
                      rounded
                      solo
                      clearable
                      label="Requisito"
                    ></v-autocomplete>
                  </v-col> -->
                  <v-col md="4" sm="12" cols="12">
                    <v-autocomplete
                      id="afluenciaList"
                      :items="AFLUENCIA_AVAILABLE"
                      v-model="selectedAfluencia"
                      @click="selectedAfluencia = null"
                      rounded
                      solo
                      clearable
                      label="Afluencia"
                    ></v-autocomplete>
                  </v-col>
                  <v-col md="4" sm="12" cols="12">
                    <v-autocomplete
                      id="ingresoList"
                      :items="INGRESO_AVAILABLE"
                      v-model="selectedIngreso"
                      @click="selectedIngreso = null"
                      :class="{
                        'active-filter': !!selectedIngreso,
                      }"
                      rounded
                      solo
                      clearable
                      label="Ingreso"
                    ></v-autocomplete>
                  </v-col>
                  <!-- <v-col xl="3" lg="3" md="3" sm="12" cols="12">
                    <v-autocomplete
                      id="diasList"
                      :items="jsonDias"
                      item-text="nombre"
                      item-value="nombre"
                      v-on:change="onchangeDias"
                      :class="{
                        'active-filter': !!selectedDias,
                      }"
                      rounded
                      solo
                      clearable
                      label="Días de atención"
                    ></v-autocomplete>
                  </v-col> -->
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <!-- Filters Mobile -->
      <div v-if="$vuetify.breakpoint.mobile">
        <v-dialog
          v-model="filters"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on"
                fixed bottom right
                color="primary"
                dark rounded large
                class="mb-4">
              <v-icon>mdi-tune-vertical</v-icon>
              <div class="mr-2"></div>
              Filtros
            </v-btn>

            <v-btn
                color="primary"
                fixed bottom right
                rounded
                @click="moveToTop"
                :style="{marginBottom: '80px'}">
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-toolbar dark color="primary" class="rounded-0">
              <v-btn icon dark @click="filters = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Filtros</v-toolbar-title>
            </v-toolbar>

            <v-container>
              <v-autocomplete
                id="departamentoList"
                label="Departamentos"
                :items="DEPARTAMENTOS_AVAILABLE"
                v-model="selectedDepartamento"
                @click="selectedDepartamento = null"
                rounded
                clearable
                solo
                hide-details
                :class="{
                  'mb-3': true,
                  'active-filter': !!selectedDepartamento,
                }"
              ></v-autocomplete>

              <v-autocomplete
                id="municipioList"
                label="Municipio"
                :items="MUNICIPIOS_AVAILABLE"
                v-model="selectedMunicipio"
                @click="selectedMunicipio = null"
                rounded
                clearable
                solo
                hide-details
                :class="{
                  'mb-3': true,
                  'active-filter': !!selectedMunicipio,
                }"
              ></v-autocomplete>

              <v-autocomplete
                id="vacunaList"
                label="Vacuna"
                :items="VACUNAS_AVAILABLE"
                v-model="selectedVacuna"
                @click="selectedVacuna = null"
                rounded
                solo
                clearable
                hide-details
                :class="{
                  'mb-3': true,
                  'active-filter': !!selectedVacuna,
                }"
              ></v-autocomplete>

              <v-autocomplete
                id="grupoList"
                label="Grupo de población"
                :items="GRUPOS_AVAILABLE"
                v-model="selectedGrupo"
                @click="selectedGrupo = null"
                rounded
                solo
                clearable
                hide-details
                :class="{
                  'mb-3': true,
                  'active-filter': !!selectedGrupo,
                }"
              ></v-autocomplete>

              <section class="mb-3">
                <span class="subtitle">Filtros Avanzados</span>
                <hr>
              </section>

              <v-autocomplete
                id="dosisList"
                label="Dosis"
                :items="DOSIS_AVAILABLE"
                v-model="selectedDosis"
                @click="selectedDosis = null"
                rounded
                hide-details
                solo
                clearable
                :class="{
                  'mb-3': true,
                  'active-filter': !!selectedDosis,
                }"
              ></v-autocomplete>

              <v-autocomplete
                id="requisitoList"
                label="Requisito"
                :items="REQUISITOS_AVAILABLE"
                v-model="selectedRequisito"
                @click="selectedRequisito = null"
                rounded
                solo
                clearable
                hide-details
                :class="{
                  'mb-3': true,
                  'active-filter': !!selectedRequisito,
                }"
              ></v-autocomplete>

              <v-autocomplete
                id="afluenciaList"
                label="Afluencia"
                :items="AFLUENCIA_AVAILABLE"
                v-model="selectedAfluencia"
                @click="selectedAfluencia = null"
                rounded
                solo
                clearable
                hide-details
                :class="{
                  'mb-3': true,
                  'active-filter': !!selectedAfluencia,
                }"
              ></v-autocomplete>

              <v-autocomplete
                id="ingresoList"
                label="Ingreso"
                :items="INGRESO_AVAILABLE"
                v-model="selectedIngreso"
                @click="selectedIngreso = null"
                rounded
                solo
                clearable
                hide-details
                :class="{
                  'mb-3': true,
                  'active-filter': !!selectedIngreso,
                }"
              ></v-autocomplete>

              <v-row class="mt-3" justify="center">
                <v-btn rounded color="primary"
                    @click="filters = false">
                  Aplicar
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </div>

      <v-container fluid class="spacing-playground pb-6 px-md-6 px-sm-0">
        <v-row justify="center" align="center">
          <v-chip label outlined color="primary">
            Vacuna Disponible
          </v-chip>

          <div class="mx-3"></div>

          <v-chip label outlined
              :style="{
                'color': 'grey',
                'background-color': '#e6dbfd !important'
              }">
            Vacunas Agotadas
          </v-chip>
        </v-row>

        <v-row>
          <v-col
            :xl="listDCols"
            :lg="listDCols"
            :md="listDCols"
            :sm="listMCols"
            :cols="listMCols"
          >
            <v-row>
              <v-col style="text-align: center">
                <h1 class="primary--text">Centros</h1>
              </v-col>
            </v-row>
            <div class="d-flex flex-column justify-start"
                :class="{
                  'center-list': !$vuetify.breakpoint.mobile,
                  'px-2': $vuetify.breakpoint.mobile,
                }">
              <center-list
                :selected="selected"
                @select="onSelect"
              ></center-list>
            </div>
          </v-col>

          <!-- Center Information Desktop -->
          <v-col
            class="hidden-sm-and-down"
            :xl="infoDCols"
            :lg="infoDCols"
            :md="infoDCols"
            :sm="infoMCols"
            :cols="infoMCols"
          >
            <div id="pivot"></div>
            <v-row v-bind:class="{ hidden: isCardSelected }">
              <div id="centro-info" class="primary">
                <v-row>
                  <v-col style="text-align: center">
                    <h1 class="white--text">{{ centro }}</h1>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-expansion-panels>
                      <v-expansion-panel style="background-color: #ffffff">
                        <v-expansion-panel-header style="color: #4f4a88">
                          <label style="font-size: larger" for=""
                            >Disponibilidad de horarios</label
                          >
                          <template v-slot:actions>
                            <i class="fas fa-sort"></i>
                          </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content
                          style="color: #4f4a88; font-size: large"
                        >
                          <v-row>
                            <v-col cols="6"><p>Lunes</p></v-col>
                            <v-col cols="6"
                              ><label for="">{{
                                lunes == "Si" ? horario_semana : "No disponible"
                              }}</label></v-col
                            >
                            <v-col cols="6"><p>Martes</p></v-col>
                            <v-col cols="6"
                              ><label for="">{{
                                martes == "Si" ? horario_semana : "No disponible"
                              }}</label></v-col
                            >
                            <v-col cols="6"><p>Miércoles</p></v-col>
                            <v-col cols="6"
                              ><label for="">{{
                                miercoles == "Si"
                                  ? horario_semana
                                  : "No disponible"
                              }}</label></v-col
                            >
                            <v-col cols="6"><p>Jueves</p></v-col>
                            <v-col cols="6"
                              ><label for="">{{
                                jueves == "Si" ? horario_semana : "No disponible"
                              }}</label></v-col
                            >
                            <v-col cols="6"><p>Viernes</p></v-col>
                            <v-col cols="6"
                              ><label for="">{{
                                viernes == "Si" ? horario_semana : "No disponible"
                              }}</label></v-col
                            >
                            <v-col cols="6"><p>Sábado</p></v-col>
                            <v-col cols="6"
                              ><label for="">{{
                                sabado == "Si" ? horario_finde : "No disponible"
                              }}</label></v-col
                            >
                            <v-col><p>Domingo</p></v-col>
                            <v-col
                              ><label for="">{{
                                sabado == "Si" ? horario_finde : "No disponible"
                              }}</label></v-col
                            >
                          </v-row>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="6" cols="12">
                    <div class="alma-pill-filled">
                      <p><b> Afluencia:</b> {{ afluencia }}</p>
                    </div>
                  </v-col>
                  <v-col>
                    <div class="alma-pill-filled">
                      <p><b> Ingreso:</b> {{ ingreso }}</p>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="6" cols="12">
                    <div class="alma-pill">
                      <p><b> Vacuna:</b> {{ vacuna }}</p>
                    </div>
                  </v-col>
                  <v-col>
                    <div class="alma-pill">
                      <p><b> Dosis:</b> {{ dosis }}</p>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div class="alma-pill-filled">
                      <p><b> Grupos:</b> {{ grupos }}</p>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div class="alma-pill-filled">
                      <p><b> Requisitos:</b> {{ requisitos }}</p>
                    </div>
                  </v-col> </v-row
                ><br />
                <h3 class="white--text">Observaciones:</h3>
                <br />
                <v-row>
                  <v-col>
                    <div class="alma-pill-filled">
                      <p>{{ observaciones }}</p>
                    </div>
                  </v-col> </v-row
                ><br />
                <h3 class="white--text">Dirección:</h3>
                <br />
                <v-row>
                  <v-col>
                    <div class="alma-pill">
                      <p>{{ direccion }}</p>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    @click="goToList"
                    class="d-none d-sm-flex d-md-none d-flex d-sm-none"
                    style="
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: middle;
                      text-align: center !important;
                      color: #ffffff;
                    "
                  >
                    <i class="fas fa-chevron-up"></i>
                    <p>Volver al listado</p>
                  </v-col>
                </v-row>
              </div>
            </v-row>
            <v-row v-bind:class="{ hidden: isCardSelected }">
              <div id="centro-map" class="primary">
                <div id="map" class="">
                  <gmap-map
                    :center="mapCenter"
                    :zoom="mapZoom"
                    style="width: 100%; height: 100%"
                  >
                    <gmap-marker
                      :key="index"
                      v-for="(m, index) in locationMarkers"
                      :position="m.position"
                      @click="center = m.position"
                    ></gmap-marker>
                  </gmap-map>
                </div>
              </div>
            </v-row>
            <v-row v-bind:class="{ hidden: isCardSelected }">
              <v-col
                @click="goToList"
                class="d-none d-sm-flex d-md-none d-flex d-sm-none"
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: middle;
                  text-align: center !important;
                  color: #4f4a88;
                "
              >
                <i class="fas fa-chevron-up"></i>
                <p>Volver al listado</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- Center Information Mobile -->
      <div v-if="$vuetify.breakpoint.mobile">
        <v-dialog
            v-model="dialogSelected"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark flat color="primary">
              <v-btn icon dark @click="dialogSelected = false" large>
                <v-icon>mdi-close-circle-outline</v-icon>
              </v-btn>
            </v-toolbar>

            <v-container style="background-color:#4F4A88">
              <div id="pivot"></div>
              <v-row class="px-2" v-bind:class="{ hidden: isCardSelected }">
                <div id="centro-info" class="primary">
                  <v-row>
                    <v-col style="text-align: center">
                      <h1 class="white--text">{{ centro }}</h1>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-expansion-panels>
                        <v-expansion-panel style="background-color: #ffffff">
                          <v-expansion-panel-header style="color: #4f4a88">
                            <label style="font-size: larger" for=""
                              >Disponibilidad de horarios</label
                            >
                            <template v-slot:actions>
                              <i class="fas fa-sort"></i>
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content
                            style="color: #4f4a88; font-size: large"
                          >
                            <v-row>
                              <v-col cols="6"><p>Lunes</p></v-col>
                              <v-col cols="6"
                                ><label for="">{{
                                  lunes == "Si" ? horario_semana : "No disponible"
                                }}</label></v-col
                              >
                              <v-col cols="6"><p>Martes</p></v-col>
                              <v-col cols="6"
                                ><label for="">{{
                                  martes == "Si"
                                    ? horario_semana
                                    : "No disponible"
                                }}</label></v-col
                              >
                              <v-col cols="6"><p>Miércoles</p></v-col>
                              <v-col cols="6"
                                ><label for="">{{
                                  miercoles == "Si"
                                    ? horario_semana
                                    : "No disponible"
                                }}</label></v-col
                              >
                              <v-col cols="6"><p>Jueves</p></v-col>
                              <v-col cols="6"
                                ><label for="">{{
                                  jueves == "Si"
                                    ? horario_semana
                                    : "No disponible"
                                }}</label></v-col
                              >
                              <v-col cols="6"><p>Viernes</p></v-col>
                              <v-col cols="6"
                                ><label for="">{{
                                  viernes == "Si"
                                    ? horario_semana
                                    : "No disponible"
                                }}</label></v-col
                              >
                              <v-col cols="6"><p>Sábado</p></v-col>
                              <v-col cols="6"
                                ><label for="">{{
                                  sabado == "Si" ? horario_finde : "No disponible"
                                }}</label></v-col
                              >
                              <v-col><p>Domingo</p></v-col>
                              <v-col
                                ><label for="">{{
                                  sabado == "Si" ? horario_finde : "No disponible"
                                }}</label></v-col
                              >
                            </v-row>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <div class="alma-pill-filled">
                        <b>Afluencia:</b>
                        <p>{{ afluencia }}</p>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div class="alma-pill-filled">
                        <b>Ingreso:</b>
                        <p>{{ ingreso }}</p>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <div class="alma-pill">
                        <b>Vacuna:</b>
                        <p>{{ vacuna }}</p>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div class="alma-pill">
                        <b>Dosis:</b>
                        <p>{{ dosis }}</p>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <div class="alma-pill-filled">
                        <p><b> Grupos:</b> {{ grupos }}</p>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <div class="alma-pill-filled">
                        <p><b> Requisitos:</b> {{ requisitos }}</p>
                      </div>
                    </v-col> </v-row
                  ><br />
                  <h3 class="white--text">Observaciones:</h3>
                  <br />
                  <v-row>
                    <v-col>
                      <div class="alma-pill-filled">
                        <p>{{ observaciones }}</p>
                      </div>
                    </v-col> </v-row
                  ><br />
                  <h3 class="white--text">Dirección:</h3>
                  <br />
                  <v-row>
                    <v-col>
                      <div class="alma-pill">
                        <p>{{ direccion }}</p>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      @click="goToList"
                      class="d-none d-sm-flex d-md-none d-flex d-sm-none"
                      style="
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: middle;
                        text-align: center !important;
                        color: #ffffff;
                      "
                    >
                    </v-col>
                  </v-row>
                </div>
              </v-row>
              <v-row class="mt-0" v-bind:class="{ hidden: isCardSelected }">
                <div id="centro-map" class="primary">
                  <div id="map" class="">
                    <gmap-map
                      :center="mapCenter"
                      :zoom="mapZoom"
                      style="width: 100%; height: 100%"
                    >
                      <gmap-marker
                        :key="index"
                        v-for="(m, index) in locationMarkers"
                        :position="m.position"
                        @click="center = m.position"
                      ></gmap-marker>
                    </gmap-map>
                  </div>
                </div>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </div>

      <site-footer></site-footer>
    </div>
  </template>
  <script>
  import axios from "axios";
  import { mapGetters } from 'vuex'
  //import VueMap from "../components/VueMap";

  import SiteNavbar from '../components/SiteNavbar.vue'
  import SiteFooter from '../components/SiteFooter.vue';
  import CenterList from '../components/CenterList.vue'

  export default {
    name: "Dashboard",

    components: {
      SiteNavbar,
      SiteFooter,
      CenterList,
    },

    created() {
      // Inicialización de sitio
      this.getMainData();
    },

    data: () => ({
      filters: false,
      selected: undefined,

      // Entorno
      main_host: process.env.VUE_APP_HOST,
      panel: [0],
      valueSearch: "",
      listDCols: 12,
      listMCols: 12,
      infoDCols: 12,
      infoMCols: 12,
      // Variables de filtros
      selectedDepartamento: "",
      selectedMunicipio: "",
      selectedVacuna: "",
      selectedGrupo: "",
      selectedDosis: "",
      selectedRequisito: "",
      selectedAfluencia: "",
      selectedIngreso: "",
      selectedDias: "",
      // Titulos | Helpers
      tituloCentros: "Cargando centros...",
      // Variables bandera
      isHidden: false,
      // hasData: true,
      isCardSelected: true,
      // Variables de centro seleccionado
      centro: "---",
      horary: "---",
      lunes: "",
      martes: "",
      miercoles: "",
      jueves: "",
      viernes: "",
      sabado: "",
      domingo: "",
      horario_semana: "",
      horario_finde: "",
      afluencia: "---",
      ingreso: "---",
      vacuna: "---",
      dosis: "---",
      grupos: "---",
      requisitos: "---",
      observaciones: "---",
      direccion: "---",
      latitude: "",
      longitude: "",
      // Listado de centros obtenidos
      jsonCentros: [],
      // Listado de seleccionables
      jsonDepartamentos: [],
      jsonMunicipios: [],
      jsonVacunas: [],
      jsonGrupos: [],
      jsonDosis: [],
      jsonRequisitos: [],
      jsonAfluencias: [],
      jsonIngresos: [],
      jsonDias: [],
      postParams: null,

      //Variables de mapa
      mapZoom: 7,
      mapCenter: {
        lat: 14.613325,
        lng: -90.535292,
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,
    }),

    mounted() {
      // this.locateGeoLocation();
      this.moveToTop()
    },

    computed: {
      dialogSelected: {
        get() {
          return this.selected !== undefined;
        },
        set() {
          this.selected = undefined;
        },
      },
      ...mapGetters([
        'FILTERED_CENTROS',
        'DEPARTAMENTOS_AVAILABLE',
        'MUNICIPIOS_AVAILABLE',
        'VACUNAS_AVAILABLE',
        'GRUPOS_AVAILABLE',
        'DOSIS_AVAILABLE',
        'REQUISITOS_AVAILABLE',
        'AFLUENCIA_AVAILABLE',
        'INGRESO_AVAILABLE',
      ]),
      hasData: function(){
        return this.FILTERED_CENTROS.length !== 0
      }
    },

    methods: {
      onSelect({ item, index }) {
        this.fillData(item, index)
      },

      moveToTop() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      },

      async getMainData() {
        // this.getDepartamentos();
        // this.getMunicipios();
        // this.getVacuna();
        // this.getGrupos();
        // this.getDosis();
        // this.getRequisitos();
        // this.getAfluencia();
        // this.getIngreso();
        // this.getDias();
        // const queryString = window.location.search;
        // const urlParams = new URLSearchParams(queryString);
        // const departamento = urlParams.get("departamento");
        // const municipio = urlParams.get("municipio");
        // const vacuna = urlParams.get("vacuna");
        // const grupos = urlParams.get("grupos");

        // this.getCentros();
      },
      async getDepartamentos() {
        axios.post(this.main_host + "/getDepartamentos", {}).then((result) => {
          /*console.log("Obteniendo departamentos");*/
          if (result.data.code == "SUCCESS") {
            if (result.data.value.length > 0) {
              this.jsonDepartamentos = result.data.value;
            }
          } else {
            console.error("Algo ha fallado");
          }
        });
      },
      async getMunicipios() {
        axios.post(this.main_host + "/getMunicipios", {}).then((result) => {
          /*console.log("Obteniendo municipios");*/
          if (result.data.code == "SUCCESS") {
            if (result.data.value.length > 0) {
              this.jsonMunicipios = result.data.value;
            }
          } else {
            console.error("Algo ha fallado");
          }
        });
      },
      async getVacuna() {
        axios.post(this.main_host + "/getVacunas", {}).then((result) => {
          /*console.log("Obteniendo vacunas");*/
          if (result.data.code == "SUCCESS") {
            if (result.data.value.length > 0) {
              this.jsonVacunas = result.data.value;
            }
          } else {
            console.error("Algo ha fallado");
          }
        });
      },
      async getGrupos() {
        axios.post(this.main_host + "/getGrupos", {}).then((result) => {
          /*console.log("Obteniendo grupos");*/
          if (result.data.code == "SUCCESS") {
            if (result.data.value.length > 0) {
              this.jsonGrupos = result.data.value;
            }
          } else {
            console.error("Algo ha fallado");
          }
        });
      },
      async getDosis() {
        axios.post(this.main_host + "/getDosis", {}).then((result) => {
          /*console.log("Obteniendo dosis");*/
          if (result.data.code == "SUCCESS") {
            if (result.data.value.length > 0) {
              this.jsonDosis = result.data.value;
            }
          } else {
            console.error("Algo ha fallado");
          }
        });
      },
      async getRequisitos() {
        axios.post(this.main_host + "/getRequisitos", {}).then((result) => {
          /*console.log("Obteniendo requisitos");*/
          if (result.data.code == "SUCCESS") {
            if (result.data.value.length > 0) {
              this.jsonRequisitos = result.data.value;
            }
          } else {
            console.error("Algo ha fallado");
          }
        });
      },
      async getAfluencia() {
        axios.post(this.main_host + "/getAfluencias", {}).then((result) => {
          /*console.log("Obteniendo afluencia");*/
          if (result.data.code == "SUCCESS") {
            if (result.data.value.length > 0) {
              this.jsonAfluencias = result.data.value;
            }
          } else {
            console.error("Algo ha fallado");
          }
        });
      },
      async getIngreso() {
        axios.post(this.main_host + "/getIngreso", {}).then((result) => {
          /*console.log("Obteniendo ingreso");*/
          if (result.data.code == "SUCCESS") {
            if (result.data.value.length > 0) {
              this.jsonIngresos = result.data.value;
            }
          } else {
            console.error("Algo ha fallado");
          }
        });
      },
      async getDias() {
        axios.post(this.main_host + "/getDias", {}).then((result) => {
          /*console.log("Obteniendo dias");*/
          if (result.data.code == "SUCCESS") {
            if (result.data.value.length > 0) {
              this.jsonDias = result.data.value;
            }
          } else {
            console.error("Algo ha fallado");
          }
        });
      },
      async getCentros() {
        this.jsonCentros = [];
        this.isHidden = false;
        this.hasData = true;
        this.postParams = {
          departamento: this.selectedDepartamento,
          municipio: this.selectedMunicipio,
          vacuna: this.selectedVacuna,
          grupo: this.selectedGrupo,
          dosis: this.selectedDosis,
          requisito: this.selectedRequisito,
          afluencia: this.selectedAfluencia,
          ingreso: this.selectedIngreso,
          dia: this.selectedDias,
        };
        /*console.log(this.postParams);*/
        axios
          .post(this.main_host + "/filtrarCentrosVacunacion", this.postParams)
          .then((result) => {
            this.isHidden = true;
            let data = result.data.value;
            data.forEach((element) => {
              delete element.$loki;
            });

            if (data.length > 0) {
              this.jsonCentros = data;
              this.hasData = true;

              this.fillData(this.jsonCentros[0], 0);

              if (this.$vuetify.breakpoint.mobile) {
                this.selected = undefined
              }
            } else {
              this.jsonCentros = [];
              this.hasData = false;
              this.resetSelected();
              this.selected = undefined;
            }

            this.tituloCentros = "Centros de Vacunación en Guatemala";
          });
      },
      async onSearch(e) {
        this.jsonCentros = [];
        this.isHidden = false;
        this.hasData = true;
        if (e != "") {
          let data = {
            termino: e,
          };
          axios
            .post(this.main_host + "/buscarCentrosVacunacion", data)
            .then((result) => {
              this.isHidden = true;
              let data = result.data.value;
              data.forEach((element) => {
                delete element.$loki;
              });
              if (data.length > 0) {
                this.tituloCentros = "Centros de Vacunación en Guatemala";
                this.jsonCentros = data;
                this.hasData = true;
              } else {
                this.jsonCentros = [];
                this.tituloCentros = "Centros de Vacunación en Guatemala";
                this.hasData = false;
              }
            });
        }
      },
      async resetFilters() {},
      async fillData(e, index) {
        this.locationMarkers = [];
        this.centro = e.centro;
        this.afluencia = e.afluencia;
        this.ingreso = e.ingreso;
        this.observaciones = e.observaciones;
        this.direccion = e.direccion;
        this.lunes = e.lunes;
        this.martes = e.martes;
        this.miercoles = e.miercoles;
        this.jueves = e.jueves;
        this.viernes = e.viernes;
        this.sabado = e.sabado;
        this.domingo = e.domingo;
        this.horario_semana = e.horario_semana;
        this.horario_finde = e.horario_finde;
        this.vacuna = e.vacuna;
        this.dosis = e.dosis;
        this.grupos = e.grupo;
        this.requisitos = e.requisito;
        e.lat = Number(e.lat);
        e.lon = Number(e.lon);
        this.mapZoom = 18;
        if (e.lat != "" && e.lon != "") {
          this.mapCenter = {
            lat: e.lat,
            lng: e.lon,
          };

          this.locationMarkers.push({ position: this.mapCenter });
          // this.moveToInfo();
        }
        this.isCardSelected = false;
        this.listDCols = 7;
        this.listMCols = 12;
        this.infoDCols = 5;
        this.infoMCols = 12;

        this.selected = index;
      },
      moveToInfo() {
        // document.querySelector("#pivot").scrollIntoView({
        //   behavior: "smooth",
        // });
      },
      addLocationMarker() {
        if (this.existingPlace) {
          const marker = {
            lat: this.latitude,
            lng: this.longitude,
          };
          this.locationMarkers.push({ position: marker });
          this.locPlaces.push(this.existingPlace);
          this.center = marker;
          this.existingPlace = null;
        }
      },
      locateGeoLocation: function () {
        // navigator.geolocation.getCurrentPosition((res) => {
        //   this.center = {
        //     lat: res.coords.latitude,
        //     lng: res.coords.longitude,
        //   };
        // });
      },
      goToList: function () {
        document.querySelector("#content").scrollIntoView({
          behavior: "smooth",
        });
      },

      resetSelected() {
        this.selected = undefined;
        this.isCardSelected = true;
      },
    },
    beforeMount() {
      this.selectedDepartamento = this.$store.getters.selectedDepartamento
      this.selectedMunicipio = this.$store.getters.selectedMunicipio
      this.selectedVacuna = this.$store.getters.selectedVacuna
      this.selectedGrupo = this.$store.getters.selectedGrupo
    },
    watch: {
      selectedDepartamento: function () {
        this.$store.commit('set_selectedDepartamento', this.selectedDepartamento)
      },
      selectedMunicipio: function () {
        this.$store.commit('set_selectedMunicipio', this.selectedMunicipio)
      },
      selectedVacuna: function () {
        this.$store.commit('set_selectedVacuna', this.selectedVacuna)
      },
      selectedGrupo: function () {
        this.$store.commit('set_selectedGrupo', this.selectedGrupo)
      },
      selectedDosis: function () {
        this.$store.commit('set_selectedDosis', this.selectedDosis)
      },
      selectedRequisito: function () {
        this.$store.commit('set_selectedRequisito', this.selectedRequisito)
      },
      selectedAfluencia: function () {
        this.$store.commit('set_selectedAfluencia', this.selectedAfluencia)
      },
      selectedIngreso: function () {
        this.$store.commit('set_selectedIngreso', this.selectedIngreso)
      },

    }
    
  };
  </script>

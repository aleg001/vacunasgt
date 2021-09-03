import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
var _ = require('lodash')

Vue.use(Vuex)

let state = {
  centros: null,
  selectedDepartamento: null,
  selectedMunicipio: null,
  selectedVacuna: null,
  selectedGrupo: null,
  selectedDosis: null,
  selectedRequisito: null,
  selectedAfluencia: null,
  selectedIngreso: null,
  selectedDias: null,
}

let getters = {
  CENTROS: state => {
    return state.centros
  },
  FILTERED_CENTROS: state => {
    try {
      let filteredDepartamento = state.centros.filter(item => item.departamento === state.selectedDepartamento || state.selectedDepartamento == null )
      let filteredMunicipio = filteredDepartamento.filter(item => item.municipio === state.selectedMunicipio || state.selectedMunicipio == null )
      let filteredVacuna = filteredMunicipio.filter(item => item.vacuna === state.selectedVacuna || state.selectedVacuna == null )
      let filteredGrupo = filteredVacuna.filter(item => item.grupo === state.selectedGrupo || state.selectedGrupo == null )
      let filteredDosis = filteredGrupo.filter(item => item.dosis === state.selectedDosis || state.selectedDosis == null )
      let filteredRequisito = filteredDosis.filter(item => item.requisito === state.selectedRequisito || state.selectedRequisito == null )
      let filteredAfluencia = filteredRequisito.filter(item => item.afluencia === state.selectedAfluencia || state.selectedAfluencia == null )
      let filteredIngreso = filteredAfluencia.filter(item => item.ingreso === state.selectedIngreso || state.selectedIngreso == null )
      // let filteredDias = filteredIngreso.filter(item => item.ingreso === state.selectedDias || state.selectedDias == null )

      return filteredIngreso
    }
    catch {
      return []
    }
  },

  DEPARTAMENTOS_AVAILABLE: state => {
    const ordered = _.orderBy(_.uniq(_.map(
      state.centros,
      'departamento'
    )))

    return _.map(ordered, item => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  MUNICIPIOS_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(
      getters.FILTERED_CENTROS,
      'municipio',
    )))

    return _.map(ordered, item => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  VACUNAS_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(
      getters.FILTERED_CENTROS,
      'vacuna',
    )))

    return _.map(ordered, item => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  DOSIS_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(
      getters.FILTERED_CENTROS,
      'dosis',
    )))

    return _.map(ordered, item => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  GRUPOS_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(
      getters.FILTERED_CENTROS,
      'grupo',
    )))

    return _.map(ordered, item => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  REQUISITOS_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(
      getters.FILTERED_CENTROS,
      'requisito',
    )))

    return _.map(ordered, item => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  AFLUENCIA_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy( _.uniq(_.map(
      getters.FILTERED_CENTROS, 
      'afluencia',
    )))

    return _.map(ordered, item => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  INGRESO_AVAILABLE: (_state, getters) => {
    const ordered = _.orderBy(_.uniq(_.map(
      getters.FILTERED_CENTROS, 'ingreso',
    )))

    return _.map(ordered, item => ({
      text: item.toUpperCase(),
      value: item,
    }))
  },

  selectedDepartamento: state => {
    return state.selectedDepartamento
  },
  selectedMunicipio: state => {
    return state.selectedMunicipio
  },
  selectedVacuna: state => {
    return state.selectedVacuna
  },
  selectedGrupo: state => {
    return state.selectedGrupo
  },
  selectedDosis: state => {
    return state.selectedDosis
  },
  selectedRequisito: state => {
    return state.selectedRequisito
  },
  selectedAfluencia: state => {
    return state.selectedAfluencia
  },
  selectedIngreso: state => {
    return state.selectedIngreso
  },
  selectedDias: state => {
    return state.selectedDias
  }
  
}
let mutations = {
  set_centros: (state, payload) => {
    state.centros = payload
  },
  set_selectedDepartamento: (state, payload) => {
    state.selectedDepartamento = payload
  },
  set_selectedMunicipio: (state, payload) => {
    state.selectedMunicipio = payload
  },
  set_selectedVacuna: (state, payload) => {
    state.selectedVacuna = payload
  },
  set_selectedGrupo: (state, payload) => {
    state.selectedGrupo = payload
  },
  set_selectedDosis: (state, payload) => {
    state.selectedDosis = payload
  },
  set_selectedRequisito: (state, payload) => {
    state.selectedRequisito = payload
  },
  set_selectedAfluencia: (state, payload) => {
    state.selectedAfluencia = payload
  },
  set_selectedIngreso: (state, payload) => {
    state.selectedIngreso = payload
  },
  set_selectedDias: (state, payload) => {
    state.selectedDias = payload
  }
}



// async function fillData(e, index) {
//   this.locationMarkers = [];
//   this.centro = e.centro;
//   this.afluencia = e.afluencia;
//   this.ingreso = e.ingreso;
//   this.observaciones = e.observaciones;
//   this.direccion = e.direccion;
//   this.lunes = e.lunes;
//   this.martes = e.martes;
//   this.miercoles = e.miercoles;
//   this.jueves = e.jueves;
//   this.viernes = e.viernes;
//   this.sabado = e.sabado;
//   this.domingo = e.domingo;
//   this.horario_semana = e.horario_semana;
//   this.horario_finde = e.horario_finde;
//   this.vacuna = e.vacuna;
//   this.dosis = e.dosis;
//   this.grupos = e.grupo;
//   this.requisitos = e.requisito;
//   e.lat = Number(e.lat);
//   e.lon = Number(e.lon);
//   this.mapZoom = 18;
//   if (e.lat != "" && e.lon != "") {
//     this.mapCenter = {
//       lat: e.lat,
//       lng: e.lon,
//     };

//     this.locationMarkers.push({ position: this.mapCenter });
//     this.moveToInfo();
//   }
//   this.isCardSelected = false;
//   this.listDCols = 7;
//   this.listMCols = 12;
//   this.infoDCols = 5;
//   this.infoMCols = 12;

//   this.selected = index;
// }


let actions = {
  CENTROS_HORARIOS_VACUNA: ({commit}) => {
    let postParams = {
      departamento: '',
      municipio: '',
      vacuna: '',
      grupo: '',
      dosis: '',
      requisito: '',
      afluencia: '',
      ingreso: '',
      dia: '',
    };
    axios.post(process.env.VUE_APP_HOST + "/filtrarCentrosVacunacion", postParams).then((result) => {
      let data = result.data.value;
      data.forEach((element) => {
        delete element.$loki;
      })
      if (data.length > 0) {
        commit('set_centros', data)
      }
    });
  }

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
import * as loki from 'lokijs';

class Database {
    db : loki =  new loki("example.db", {
        autoload: true,
        autosave: true, 
        autosaveInterval: 10000, // 10 seconds
      });
    tableProperties = {
        disableMeta: true,
    };
    vacunas = this.db.addCollection("vacunas", this.tableProperties);
    requisito = this.db.addCollection("requisito", this.tableProperties);
    afluencias = this.db.addCollection("afluencias", this.tableProperties);
    disponibilidad = this.db.addCollection("disponibilidad", this.tableProperties);
    dosis = this.db.addCollection("dosis", this.tableProperties);
    ingreso = this.db.addCollection("ingreso", this.tableProperties);
    grupos = this.db.addCollection("grupos", this.tableProperties);
    centrosVacunacion = this.db.addCollection("centrosVacunacion", this.tableProperties);
    departamentos = this.db.addCollection("departamentos", this.tableProperties);
    municipios = this.db.addCollection("municipios", this.tableProperties);

    ingresarVacunas(vacunas: []){
        this.vacunas.removeDataOnly();
        return this.vacunas.insert(vacunas);
    }

    obtenerVacunas(){
        return this.vacunas.find();
    }

    ingresarRequisito(requisitos: []){
        this.requisito.removeDataOnly();
        this.requisito.insert(requisitos);
    }

    obtenerRequisitos(){
        return this.requisito.find();
    }

    ingresarAfluencias(afluencias: []){
        this.afluencias.removeDataOnly();
        this.afluencias.insert(afluencias);
    }

    obtenerAfluencias(){
        return this.afluencias.find();
    }

    ingresarDisponibilidad(disponibilidad: []){
        this.disponibilidad.removeDataOnly();
        this.disponibilidad.insert(disponibilidad);
    }

    obtenerDisponibilidad(){
        return this.disponibilidad.find();
    }

    ingresarDosis(dosis: []){
        this.dosis.removeDataOnly();
        this.dosis.insert(dosis);
    }

    obtenerDosis(){
        return this.dosis.find();
    }

    ingresarIngreso(ingreso: []){
        this.ingreso.removeDataOnly();
        this.ingreso.insert(ingreso);
    }

    obtenerIngreso(){
        return this.ingreso.find();
    }

    ingresarGrupos(grupos: []){
        this.grupos.removeDataOnly();
        this.grupos.insert(grupos);
    }

    obtenerGrupos(){
        return this.grupos.find();
    }

    ingresarCentrosVacunacion(centrosVacunacion: []){
        this.centrosVacunacion.removeDataOnly();
        this.centrosVacunacion.insert(centrosVacunacion);
    }

    obtenerCentrosVacunacion(){
        return this.centrosVacunacion.find();
    }

    obtenerCentrosVacunacionFiltro(condicion : any){
        var tmp = this.centrosVacunacion.find(condicion).sort(function(a, b){
            return a.centro - b.centro;
        });
        console.log("centros");
        const centro = [...new Set(tmp.map(item => item.centro))]; // [ 'A', 'B']
        var res = [];
        for(var i = 0; i < centro.length ; i++){
            console.log(i);
            var json: any= {
                centro: centro[i],
            }
            json.vacunas = [];
            for(var j = 0; j < tmp.length; j++){
                var c = tmp[j];
                //console.log(c);
                if(c.centro == centro[i]){
                    if(json.departamento == undefined || json.departamento == null || json.departamento == ""){
                        json.departamento = c.departamento;
                        json.municipio = c.municipio;
                        json.direccion = c.direccion;
                        json.afluencia = c.afluencia;
                        json.ingreso = c.ingreso;
                        json.observaciones = c.observaciones;
                        json.lat = c.lat;
                        json.lon = c.lon;
                        json.horario_semana = c.horario_semana;
                        json.horario_finde = c.horario_finde;
                        json.lunes = c.lunes;
                        json.martes = c.martes;
                        json.miercoles = c.miercoles;
                        json.jueves = c.jueves;
                        json.viernes = c.viernes;
                        json.sabado = c.sabado;
                        json.domingo = c.domingo;
                    }
                    var vacuna = {
                        "nombre": c.vacuna,
                        "dosis": c.dosis,
                        "grupo": c.grupo,
                        "requisito": c.requisito,
                        "disponibilidad": c.disponibilidad
                    }
                    json.vacunas.push(vacuna);
                }
            }
            res.push(json);
        }
        return res;
    }

    ingresarDepartamentos(departamentos: []){
        this.departamentos.removeDataOnly();
        this.departamentos.insert(departamentos);
    }

    obtenerDepartamentos(){
        return this.departamentos.find();
    }

    ingresarMunicipios(municipios: []){
        this.municipios.removeDataOnly();
        this.municipios.insert(municipios);
    }

    obtenerMunicipios(){
        return this.municipios.find();
    }
}

export {Database}
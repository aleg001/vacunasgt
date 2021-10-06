 import * as functions from "firebase-functions";
import * as express from "express";
import {ScheduledTasks} from './core/scheduledTasks';
import {Database} from "./database/database";
import * as cors from 'cors'
import { SheetProcessor } from "./core/sheetProcessor";
import environment from "./environment";

const db = new Database();
const app = express();
const sheetProcessor = new SheetProcessor();

async function ready(){
    await updateDb();
    new ScheduledTasks().initCron();
}

async function updateDb(){
    try {
        if(await sheetProcessor.init()){
            var sheets = await sheetProcessor.getDocumentSheets();
            for (let i = 0; i < sheets.length; i++) {
                let s = sheets[i].properties;
                let title = s.title;
                switch(title){
                    case environment.hojaVacunas:
                        await sheetProcessor.hojaVacunas(db, s);
                        break;
                    case environment.hojaRequisito:
                        await sheetProcessor.hojaRequisitos(db, s);
                        break;
                    case environment.hojaAfluencias:
                        await sheetProcessor.hojaAfluencias(db, s);
                        break;
                    case environment.hojaDisponibilidad:
                        await sheetProcessor.hojaDisponibilidad(db, s);
                        break;
                    case environment.hojaDosis:
                        await sheetProcessor.hojaDosis(db, s);
                        break;
                    case environment.hojaIngreso:
                        await sheetProcessor.hojaIngreso(db, s);
                        break;
                    case environment.hojaGrupos:
                        await sheetProcessor.hojaGrupos(db, s);
                        break;
                    case environment.hojaCentrosVacunacion:
                        //TODO
                        await sheetProcessor.hojaCentrosVacunacion(db, s);
                        break;
                    default:
                        break;
                }
            }
            console.log("Database updated!");
            return true;
        }else{
            console.log("Cant update database");
            return false;
        }
    } catch (e) {
        console.log(e);
        return false;
    }
}

function formatResponse(data: any){
    var res = {
        "code": "SUCCESS",
        "value": data
    };
    if(data == null){
        res = {
            "code": "ERROR",
            "value": null
        };
    }
    return res;
}

function exceptionFormat(code:string, value:any){
    if(code == undefined || code == null){
        code = "ERROR";
    }
    if(value == undefined || value == null){
        value = null;
    }
    var msg = {
        "code": code,
        "value": value
    }
    return msg;
}


app.use(cors());

app.post("/updateRecords", async (req, res) => {
    var result = await updateDb();
    if(result){
        res.json("{'code': 'SUCCESS', 'value': 'Base de datos actualizada exitosamente.'}");
    }else{
        res.json("{'code': 'SUCCESS', 'value': 'Algo fallo al actualizar los datos.'}");
    }
});

app.post("/getVacunas", async(req, res)=>{
    try{
        res.json(formatResponse(db.obtenerVacunas()));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

app.post("/getRequisitos", async(req, res)=>{
    try{
        res.json(formatResponse(db.obtenerRequisitos()));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

app.post("/getAfluencias", async(req, res)=>{
    try{
        res.json(formatResponse(db.obtenerAfluencias()));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

app.post("/getDisponibilidad", async(req, res)=>{
    try{
        res.json(formatResponse(db.obtenerDisponibilidad()));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

app.post("/getDosis", async(req, res)=>{
    try{
        res.json(formatResponse(db.obtenerDosis()));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

app.post("/getIngreso", async(req, res)=>{
    try{
        res.json(formatResponse(db.obtenerIngreso()));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

app.post("/getGrupos", async(req, res)=>{
    try{
        res.json(formatResponse(db.obtenerGrupos()));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

app.post("/getDepartamentos", async(req, res)=>{
    try{
        res.json(formatResponse(db.obtenerDepartamentos()));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

app.post("/getMunicipios", async(req, res)=>{
    try{
        res.json(formatResponse(db.obtenerMunicipios()));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

app.post("/getCentrosVacunacion", async(req, res)=>{
    try{
        res.json(formatResponse(db.obtenerCentrosVacunacion()));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

app.post("/getDias", async(req, res)=>{
    try{
        var dias = [
            {
                "nombre": "Lunes",
            },
            {
                "nombre": "Martes",
            },
            {
                "nombre": "Miercoles",
            },
            {
                "nombre": "Jueves",
            },
            {
                "nombre": "Viernes",
            },
            {
                "nombre": "Sabado",
            },
            {
                "nombre": "Domingo",
            }
        ]
        res.json(formatResponse(dias));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

function buildQueryCondition(departamento: string, municipio: string, vacuna: string, grupo: string, dosis: string, requisito: string, afluencia: string, ingreso: string, dia: string){
    var condition: any = {};
    if(departamento != null && departamento != ""){
        condition.departamento = departamento;
    }
    if(municipio != null && municipio != ""){
        condition.municipio = municipio;
    }
    if(vacuna != null && vacuna != ""){
        condition.vacuna = vacuna;
    }
    if(grupo != null && grupo != ""){
        condition.grupo = grupo;
    }
    if(dosis != null && dosis != ""){
        condition.dosis = dosis;
    }
    if(requisito != null && requisito != ""){
        condition.requisito = requisito;
    }
    if(afluencia != null && afluencia != ""){
        condition.afluencia = afluencia;
    }
    if(ingreso != null && ingreso != ""){
        condition.ingreso = ingreso;
    }
    if(dia != null && dia != ""){
        condition[dia] = "Si";
    }
    //console.log(condition);
    return condition;
}

app.post("/filtrarCentrosVacunacion", async(req, res)=>{
    try{
        var departamento = req.body.departamento;
        var municipio = req.body.municipio;
        var vacuna = req.body.vacuna;
        var grupo = req.body.grupo;
        var dosis = req.body.dosis;
        var requisito = req.body.requisito;
        var afluencia = req.body.afluencia;
        var ingreso = req.body.ingreso;
        var dia = req.body.dia;
        var condition = buildQueryCondition(departamento, municipio, vacuna, grupo, dosis, requisito, afluencia, ingreso, dia);
        res.json(formatResponse(db.centrosVacunacion.find(condition)));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

app.post("/buscarCentrosVacunacion", async(req, res)=>{
    try{
        var termino = req.body.termino;
        var condition: any = {};
        condition.centro = { '$contains' : termino };
        res.json(formatResponse(db.centrosVacunacion.find(condition)));
    } catch(e){
        console.log(e);
        res.json(exceptionFormat("ERROR", "Se produjo un error al obtener la informacion"));
    }
});

ready();
exports.server = functions.https.onRequest(app);
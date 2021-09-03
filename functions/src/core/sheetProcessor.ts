import { Database } from "../database/database";
import { google, sheets_v4 } from "googleapis";
import environment from "../environment";
import { GoogleAuth } from "googleapis-common";

class SheetProcessor {
    auth: GoogleAuth;
    client: any;
    sheet: sheets_v4.Sheets;
    spreadsheetId: string;

    async init() {
        try {
            this.auth = new google.auth.GoogleAuth({
                keyFile: environment.keyFile,
                scopes: environment.googleScopes
            });
            this.client = await this.auth.getClient();
            this.sheet = google.sheets({ version: "v4", auth: this.client });
            this.spreadsheetId = environment.spreadsheetId;
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async getDocumentSheets() {
        try {
            const metaData = await this.sheet.spreadsheets.get({
                auth: this.auth,
                spreadsheetId: this.spreadsheetId
            });
            return metaData.data.sheets;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async getSheet(sheet: sheets_v4.Schema$SheetProperties) {
        try {
            //console.log(sheet);
            let title = sheet.title;
            let r = "" + title + "!A1:Z" + sheet.gridProperties.rowCount;
            let ranges = [r];
            const response = await this.sheet.spreadsheets.values.batchGet({
                spreadsheetId: this.spreadsheetId, ranges: ranges
            });
            return response.data.valueRanges[0].values;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    capitalize(txt: string) {
        txt = txt.toLowerCase();
        return txt.charAt(0).toUpperCase() + txt.slice(1);
    }

    async getGenericData(db: Database, sheet: sheets_v4.Schema$SheetProperties, capitalize: boolean = true) {
        var sheetValues = await this.getSheet(sheet);
        var recordsCount = sheetValues.length;
        console.log("========= " + sheet.title + " has " + recordsCount + " records =========");
        var data: any = [];
        for (var i = 0; i < recordsCount; i++) {
            var s = sheetValues[i];
            if (s != null && s[0] != null && s[0] != "") {
                if (capitalize) {
                    s[0] = this.capitalize(s[0]);
                }
                data.push(
                    {
                        //id: i, 
                        nombre: s[0]
                    });
            }
        }
        return data;
    }

    async hojaVacunas(db: Database, sheet: sheets_v4.Schema$SheetProperties) {
        try {
            var data = await this.getGenericData(db, sheet, false);
            await db.ingresarVacunas(data);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async hojaRequisitos(db: Database, sheet: sheets_v4.Schema$SheetProperties) {
        try {
            var data = await this.getGenericData(db, sheet, false);
            await db.ingresarRequisito(data);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async hojaAfluencias(db: Database, sheet: sheets_v4.Schema$SheetProperties) {
        try {
            var data = await this.getGenericData(db, sheet);
            await db.ingresarAfluencias(data);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async hojaDisponibilidad(db: Database, sheet: sheets_v4.Schema$SheetProperties) {
        try {
            var data = await this.getGenericData(db, sheet);
            await db.ingresarDisponibilidad(data);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async hojaDosis(db: Database, sheet: sheets_v4.Schema$SheetProperties) {
        try {
            var data = await this.getGenericData(db, sheet);
            await db.ingresarDosis(data);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async hojaIngreso(db: Database, sheet: sheets_v4.Schema$SheetProperties) {
        try {
            var data = await this.getGenericData(db, sheet);
            await db.ingresarIngreso(data);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async hojaGrupos(db: Database, sheet: sheets_v4.Schema$SheetProperties) {
        try {
            var data = await this.getGenericData(db, sheet, false);
            await db.ingresarGrupos(data);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    obtenerLatLon(maps: String) {
        var res = {
            "lat": "",
            "lon": ""
        }
        try {
            if (maps != "") {
                var s = maps.split("@");
                s = s[1].split(",");
                res = {
                    "lat": s[0],
                    "lon": s[1]
                }
            }
        } catch (e) {
            console.log(e);
        }
        return res;
    }

    async actualizarDepartamentos(db: Database, departamento: string) {
        //insert into departamento (departamento) if not exists
        var json = {
            "nombre": departamento
        };
        var exists = db.departamentos.find(json);
        if (exists == null || exists.length == 0) {
            db.departamentos.insert(json);
        }
        return true;
    }

    async actualizarMunicipios(db: Database, municipio: string) {
        //insert into municipio (municipio) if not exists
        var json = {
            "nombre": municipio
        };
        var exists = db.municipios.find(json);
        if (exists == null || exists.length == 0) {
            db.municipios.insert(json);
        }
        return true;
    }

    getFieldValue(value: string, defaultValue: string = "No se sabe", capitalize: boolean = true) {
        if (value == null || value == "") {
            value = defaultValue;
        }
        if (capitalize) {
            value = this.capitalize(value);
        }
        return value;
    }

    isValidCenter(centro: string, vacuna: string, grupo: string) {
        if (centro == null || centro == "") {
            return false;
        }
        if (vacuna == null || vacuna == "") {
            return false;
        }
        if (grupo == null || grupo == "") {
            return false;
        }
        return true;
    }

    async hojaCentrosVacunacion(db: Database, sheet: sheets_v4.Schema$SheetProperties) {
        var sheetValues = await this.getSheet(sheet);
        var recordsCount = sheetValues.length;
        console.log("========= " + sheet.title + " has " + recordsCount + " records =========");
        var data: any = [];
        //Skip row 1, those are document headers
        for (var i = 1; i < recordsCount; i++) {
            var s = sheetValues[i];
            //console.log(s);
            var centro = s[0];
            var vacuna = s[1];
            var dosis = this.getFieldValue(s[2]);
            var grupo = s[3];
            if (this.isValidCenter(centro, vacuna, grupo)) {
                var requisito = s[4];
                var disponibilidad = this.getFieldValue(s[5]);
                var departamento = this.getFieldValue(s[6])
                var municipio = this.getFieldValue(s[7]);
                var direccion = this.getFieldValue(s[8], "", false);
                var afluencia = this.getFieldValue(s[9]);
                var ingreso = this.getFieldValue(s[10]);
                var observaciones = this.getFieldValue(s[11], "", false);
                var maps = this.getFieldValue(s[12], "");
                var latlon = this.obtenerLatLon(maps);
                //var disponibilidad2 = this.getFieldValue(s[13]);
                var horarioSemana = this.getFieldValue(s[14], "No se sabe", false);
                var horarioFinde = this.getFieldValue(s[15], "No se sabe", false);
                var lunes = this.getFieldValue(s[16], "NO");
                var martes = this.getFieldValue(s[17], "NO");
                var miercoles = this.getFieldValue(s[18], "NO");
                var jueves = this.getFieldValue(s[19], "NO");
                var viernes = this.getFieldValue(s[20], "NO");
                var sabado = this.getFieldValue(s[21], "NO");
                var domingo = this.getFieldValue(s[22], "NO");
                var d = {
                    "centro": centro,
                    "vacuna": vacuna,
                    "dosis": dosis,
                    "grupo": grupo,
                    "requisito": requisito,
                    "disponibilidad": disponibilidad,
                    "departamento": departamento,
                    "municipio": municipio,
                    "direccion": direccion,
                    "afluencia": afluencia,
                    "ingreso": ingreso,
                    "observaciones": observaciones,
                    //"maps": maps,
                    "lat": latlon.lat,
                    "lon": latlon.lon,
                    //"disponibilidad": s[13],
                    "horario_semana": horarioSemana,
                    "horario_finde": horarioFinde,
                    "lunes": lunes,
                    "martes": martes,
                    "miercoles": miercoles,
                    "jueves": jueves,
                    "viernes": viernes,
                    "sabado": sabado,
                    "domingo": domingo
                }
                await this.actualizarDepartamentos(db, departamento);
                await this.actualizarMunicipios(db, municipio);
                data.push(d);
            }
        }
        await db.ingresarCentrosVacunacion(data);
        return true;
    }

}

export { SheetProcessor };
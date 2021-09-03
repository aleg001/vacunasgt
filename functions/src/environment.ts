import * as dotenv from 'dotenv';
dotenv.config();

export default {
    keyFile: process.env.KEY_FILE ?? '',
    googleScopes: process.env.GOOGLE_SCOPES ?? '',
    googleApiVersion: process.env.GOOGLE_API_VERSION ?? '',
    spreadsheetId: process.env.SPREADSHEET_ID ?? '',
    hojaVacunas: process.env.HOJA_VACUNAS ?? '',
    hojaRequisito: process.env.HOJA_REQUISITO ?? '',
    hojaAfluencias: process.env.HOJA_AFLUENCIAS ?? '',
    hojaDisponibilidad: process.env.HOJA_DISPONIBILIDAD ?? '',
    hojaDosis: process.env.HOJA_DOSIS ?? '',
    hojaIngreso: process.env.HOJA_INGRESO ?? '',
    hojaGrupos: process.env.HOJA_GRUPOS ?? '',
    hojaCentrosVacunacion: process.env.HOJA_CENTROS_VACUNACION ?? ''
}
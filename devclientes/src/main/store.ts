import { app, ipcMain } from "electron";
import PouchDb from "pouchdb";
import path from "path";
import fs from "fs";

import {Customer, NewCustomer} from  '../shared/types/ipc'

// Determinar o caminho base para o banco de dados com base no sistema operacional
let dbPath;

if(process.platform === 'darwin'){
    // Caminho macOS
    dbPath = path.join(app.getPath("appData"), "devclientes", "my_db")
}else{
    // Caminho outras plataformas
    dbPath = path.join(app.getPath("userData"), "my_db")
}

// Verificar e criar o diretorio se não existir 

const dbDir = path.dirname(dbPath);

if(!fs.existsSync(dbDir)){
    fs.mkdirSync(dbDir, {recursive: true})
}

// inicializar o db
const db = new PouchDb<Customer>(dbPath)
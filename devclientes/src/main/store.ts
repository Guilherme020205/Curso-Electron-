import { app, ipcMain } from "electron";
import PouchDB from "pouchdb";
import path from "path";
import fs from "fs";

import { Customer, NewCustomer } from '../shared/types/ipc'
import { randomUUID } from "crypto";

// Determinar o caminho base para o banco de dados com base no sistema operacional
let dbPath;

if (process.platform === 'darwin') {
    // Caminho macOS
    dbPath = path.join(app.getPath("appData"), "devclientes", "my_db")
} else {
    // Caminho outras plataformas
    dbPath = path.join(app.getPath("userData"), "my_db")
}

// Verificar e criar o diretorio se não existir 

const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true })
}

// inicializar o db
const db = new PouchDB<Customer>(dbPath)

// Função para add no banco
async function addCustomer(doc: NewCustomer): Promise<PouchDB.Core.Response | void> {
    const id = randomUUID();
    const data: Customer = {
        ...doc,
        _id: id
    }

    return db.put(data)
        .then(response => response)
        .catch(err => console.error("erro ao cadastrar", err))
}

ipcMain.handle("add-customer", async (event, doc: Customer) => {
    const result = await addCustomer(doc);
    return result;
})
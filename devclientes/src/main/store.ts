import { app, ipcMain } from "electron";
import PouchDB from "pouchdb";
import path from "path";
import fs from "fs";

import { Customer, NewCustomer } from '../shared/types/ipc'
import { randomUUID } from "crypto";
import { error } from "console";

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

// função buscar todos os clientes

async function fectAllCustoemers(): Promise<Customer[]> {
    try {
        const result = await db.allDocs({ include_docs: true })
        return result.rows.map(row => row.doc as Customer)
    } catch (error) {
        console.log("Erro para buscar", error)
        return []
    }
}

ipcMain.handle('fetch-all-customers', async () => {
    return await fectAllCustoemers();
})

// Busca cliente pelo id

async function fectCustoemersById(docId: string) {
    return db.get(docId)
        .then(doc => doc)
        .catch(error => {
            console.log("Error ao buscar", error)
            return null;
        })

}

ipcMain.handle("fetch-customer-id", async (event, docId) => {
    const result = await fectCustoemersById(docId)
    return result;
})

// Deletando cliente pelo id

async function deleteCustomer(docId: string): Promise<PouchDB.Core.Response | null> {
    try {
        const doc = await db.get(docId);
        const result = await db.remove(doc._id, doc._rev)
        return result;

    } catch (error) {
        console.log("Erro para deletar", error)
        return null
    }
}

ipcMain.handle("delete-customer", async (event, docId: string): Promise<PouchDB.Core.Response | null> => {
    return await deleteCustomer(docId)
})
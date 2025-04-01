import { ipcMain } from "electron";

// Handle
ipcMain.handle("fetch-users", () => {
    console.log("Buscando users...")

    return[
        {id: 1, nome:"Guilherme"},
        {id: 2, nome:"Celine"},
        {id: 3, nome:"Mobi"}
    ]
})
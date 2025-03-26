const {app, BrowserWindow, ipcMain} = require('electron')
const path = require("node:path")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        minWidth: 500,
        minHeight: 500,
        autoHideMenuBar: true, // desativa a barra de menu ALT volta ela
        backgroundColor: "#CCC", // plano de fundo global "padrão"
        // alwaysOnTop: true, // não minimiza a tela
        // fullscreen: true, // Deixa a tela fullScreen
        webPreferences:{
            preload: path.join(__dirname, "preload.js")
        }
    })

    // const child = new BrowserWindow({
    //     width: 1000,
    //     height: 500,
    //     parent: win,
    //     modal: true,
    //     show: false
    // })

    // child.loadURL("https://github.com/Guilherme020205?tab=repositories")

    // child.once("ready-to-show", () => {
    //     child.show();
    // })

    win.loadFile('index.html')

}

app.whenReady().then(() => {

    ipcMain.handle("ping", () => "pong, pong")

    ipcMain.handle("username", (event, nome) => {
        console.log(nome)

        return `Bem-vindo ${nome}`
    })

    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }

    app.on("activate", () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }   
    })
})

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
})
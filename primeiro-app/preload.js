const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld("api", {
    ping: () => ipcRenderer.invoke("ping"),
    getName: () => ipcRenderer.invoke("username")
})


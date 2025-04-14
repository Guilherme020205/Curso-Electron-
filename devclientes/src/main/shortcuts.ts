import { BrowserWindow, app, globalShortcut } from "electron";

export function createShortcut(window: BrowserWindow) {
    app.on("browser-window-focus", () => {
        globalShortcut.register("CommandOrControl+N", () => {
            window.webContents.send("new-customer");
        });  
    });
    app.on("browser-window-blur", () => {
        globalShortcut.unregister("CommandOrControl+N");
    })
}

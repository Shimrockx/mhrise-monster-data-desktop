import { app, BrowserWindow, ipcMain } from 'electron'
import ElectronStore from 'electron-store'

import * as path from 'path'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const assetsPath =
  process.env.NODE_ENV === 'production'
    ? process.resourcesPath
    : app.getAppPath()

const store = new ElectronStore()

function createWindow() {
  console.log(path.join(assetsPath, 'assets', 'icon.ico'))
  mainWindow = new BrowserWindow({
    icon: path.join(assetsPath, 'assets', 'icon.ico'),
    width: store.get('width') == null ? 1024 : Number(store.get('width')),
    height: store.get('height') == null ? 768 : Number(store.get('height')),
    x: store.get('x') == null ? 0 : Number(store.get('x')),
    y: store.get('y') == null ? 0 : Number(store.get('y')),
    backgroundColor: '#ffffff',
    opacity: store.get('opacity') == null ? 100 : Number(store.get('opacity')),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
    frame: false,
    resizable: true,
  })

  mainWindow.setAlwaysOnTop(true, 'normal')
  mainWindow.setResizable(true)
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
  //mainWindow.webContents.openDevTools()

  mainWindow.on('resize', function () {
    if (mainWindow != null) {
      let size = mainWindow.getSize()
      let width = size[0]
      let height = size[1]
      store.set('width', width)
      store.set('height', height)
    }
  })

  // Set interval instead of listening event to avoid lag when moving window
  setInterval(() => {
    if (mainWindow != null) {
      let position = mainWindow.getPosition()
      let x = position[0]
      let y = position[1]
      store.set('x', x)
      store.set('y', y)
    }
  }, 10000)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

function reduce() {
  mainWindow?.setPosition(0, 0, true)
  mainWindow?.setSize(200, 50)
}

function expand() {
  mainWindow?.setPosition(
    store.get('x') == null ? 0 : Number(store.get('x')),
    store.get('y') == null ? 0 : Number(store.get('y')),
    true
  )
  mainWindow?.setSize(1024, 768)
}

async function registerListeners() {
  /**
   * This comes from bridge integration, check bridge.ts
   */
  ipcMain.on('message', (_, message) => {
    console.log(message)
  })

  ipcMain.on('setStoreValue', (_, key, value) => {
    store.set(key, value)
  })

  ipcMain.handle('getStoreValue', (_, key) => {
    return store.get(key)
  })

  ipcMain.on('setOpacity', (_, message) => {
    store.set('opacity', parseInt(message) / 100)
    mainWindow?.setOpacity(parseInt(message) / 100)
  })

  ipcMain.handle('getOpacity', _ => {
    return mainWindow?.getOpacity()
  })

  ipcMain.on('reduce', (_, message) => {
    reduce()
  })

  ipcMain.on('expand', (_, message) => {
    expand()
  })

  ipcMain.on('appClose', (_, message) => {
    mainWindow?.destroy()
  })
}

app
  .on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

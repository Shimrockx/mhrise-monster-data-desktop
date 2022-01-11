import { contextBridge, ipcRenderer } from 'electron'

export const api = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.sendMessage`
   */

  sendMessage: (message: string) => {
    ipcRenderer.send('message', message)
  },

  setStore: (key: string, value: any) => {
    ipcRenderer.send('setStoreValue', key, value)
  },

  getStore: async (key: string): Promise<any> => {
    return await ipcRenderer.invoke('getStoreValue', key)
  },

  setOpacity: (value: any) => {
    ipcRenderer.send('setOpacity', value)
  },

  getOpacity: (): any => {
    return ipcRenderer.invoke('getOpacity')
  },

  close: () => {
    ipcRenderer.send('appClose', '')
  },

  /**
   * Provide an easier way to listen to events
   */
  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  },
}

contextBridge.exposeInMainWorld('Main', api)

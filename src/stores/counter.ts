import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // Estado global (datos que compartiremos)
  state: () => ({
    count: 0,
    appName: 'Mi Tienda Global en Vue'
  }),

  // Acciones (funciones equivalentes a los métodos o mutaciones para modificar el estado)
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
})
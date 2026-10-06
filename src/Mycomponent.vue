<template>
  <div class="container">
    <!-- Parte anterior del tutorial -->
    <h1 v-if="isVisible" :class="{ highlighted: isHighlighted }">
      {{ message }}
    </h1>

    <div class="actions">
      <button @click="toggleVisibility">Mostrar / Ocultar</button>
      <button @click="toggleHighlight">Cambiar Color</button>
    </div>

    <input v-model="message" type="text" placeholder="Escribe algo..." />

    <hr />

    <!-- Renderizado de listas con v-for -->
    <h3>Lista de elementos:</h3>
    <ul>
      <li v-for="item in itemsList" :key="item.id">
        {{ item.text }}
      </li>
    </ul>

    <hr />

    <!-- SECCIÓN DE ESTADO GLOBAL (PINIA / STORE) -->
    <div class="store-box">
      <h3>{{ counterStore.appName }}</h3>
      <p>Valor global: <strong>{{ counterStore.count }}</strong></p>
      <div class="actions">
        <button @click="counterStore.decrement">-1</button>
        <button @click="counterStore.increment">+1</button>
        <button @click="counterStore.reset">Resetear</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from './stores/counter'

export default {
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello World with Vue',
      isVisible: true,
      isHighlighted: false,
      itemsList: [
        { id: 1, text: 'Primer elemento' },
        { id: 2, text: 'Segundo elemento' },
        { id: 3, text: 'Tercer elemento' }
      ]
    }
  },
  // Usamos setup para instanciar la tienda y hacerla disponible en el componente
  setup() {
    const counterStore = useCounterStore()
    return { counterStore }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    toggleHighlight() {
      this.isHighlighted = !this.isHighlighted
    }
  }
}
</script>

<style scoped>
.container {
  font-family: sans-serif;
  padding: 20px;
}
.actions {
  margin-bottom: 12px;
}
button {
  margin-right: 8px;
  cursor: pointer;
  padding: 5px 10px;
}
input {
  padding: 6px;
  width: 260px;
}
.highlighted {
  color: #e67e22;
}
.store-box {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  max-width: 320px;
}
</style>
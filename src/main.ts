import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

// Conectamos Pinia a la aplicación
app.use(createPinia())

app.mount('#app')
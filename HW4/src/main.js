import { createApp } from 'vue'
import App from './App.vue'


// createApp(App).mount('#app')
const app = createApp(App)

app.directive("href-change", {
    beforeMount: (el, binding) => {
        
    }
})

app.mount('#app')

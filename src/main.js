import { createApp } from 'vue';
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus';
import './style.css';
import App from './App.vue';
import router from './routes'

const app = createApp(App)

app.use(ElementPlus);
app.use(router)

app.mount('#app');

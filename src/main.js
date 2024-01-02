import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {getCategoryAPI} from "@/apis/layout.js";
import {lazyPlugin} from "@/directives/index.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 自定义全局指令实现图片懒加载
app.use(lazyPlugin)

app.mount('#app')
getCategoryAPI().then(res=>{
    console.log(res);
})
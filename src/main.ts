import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import FileForm from './components/FileForm.vue'
import FileTable from './components/FileTable.vue'
import SearchBar from './components/SearchBar.vue'

import { createRouter,  createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: FileTable,
    children: [

      { path: '', component: FileTable },
      { path: 'search', component: SearchBar },
      { path: 'form', component: FileForm }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
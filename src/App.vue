<template>
  <div class="app">
    <!-- ===== SIDEBAR ===== -->
    <aside class="sidebar">
      <h2>Arquivo Escolar</h2>
      <ul>
        <li><a href="#" @click.prevent="currentView = 'dashboard'">Dashboard</a></li>
        <li><a href="#" @click.prevent="currentView = 'search'">Pesquisar</a></li>
        <li><a href="#" @click.prevent="currentView = 'cadastrar'">Cadastrar</a></li>
      </ul>
    </aside>

    <!-- ===== MAIN CONTENT ===== -->
    <main class="main">
      <h1>Localizador de Arquivos</h1>

      <!-- DASHBOARD (busca + tabela) -->
      <div v-if="currentView === 'dashboard'">
        <div class="search-box">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Pesquisar por código ou nome..."
          />
          <button @click="searchFiles">🔍 Buscar</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Localização</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(file, index) in filteredFiles" :key="index">
              <td>{{ file.code }}</td>
              <td>{{ file.name }}</td>
              <td>{{ file.location }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- CADASTRAR (formulário apenas) -->
      <div v-else-if="currentView === 'cadastrar'">
        <h2>Cadastrar Novo Arquivo</h2>
        <form @submit.prevent="addFile">
          <input v-model="newFile.code" placeholder="Código" required />
          <input v-model="newFile.name" placeholder="Nome" required />
          <input v-model="newFile.location" placeholder="Ex: Armário A1, Gaveta 3" required />
          <button type="submit">Cadastrar</button>
        </form>
      </div>

      <!-- PESQUISAR (somente busca, sem tabela) -->
      <div v-else-if="currentView === 'search'">
        <div class="search-box">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Pesquisar por código ou nome..."
          />
          <button @click="searchFiles">🔍 Buscar</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentView = ref('dashboard') // inicia no dashboard
const files = ref([])
const searchTerm = ref('')

const newFile = ref({
  code: '',
  name: '',
  location: ''
})

function addFile() {
  files.value.push({
    code: newFile.value.code,
    name: newFile.value.name,
    location: newFile.value.location
  })

  // resetar formulário
  newFile.value = { code: '', name: '', location: '' }
}

const filteredFiles = computed(() => {
  const term = searchTerm.value.toLowerCase()
  return files.value.filter(file =>
    file.code.toLowerCase().includes(term) ||
    file.name.toLowerCase().includes(term)
  )
})

function searchFiles() {
  // já funciona reativo
}
</script>

<style>
/* mantém o CSS global que já melhoramos */
</style>

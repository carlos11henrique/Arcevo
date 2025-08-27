<template>
  <div class="app">
    <aside class="sidebar">
      <h2>Arquivo Escolar</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Pesquisar</a></li>
        <li><a href="#">Cadastrar</a></li>
      </ul>
    </aside>

    <main class="main">
      <h1>Localizador de Arquivos</h1>

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
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(file, index) in filteredFiles" :key="index">
            <td>{{ file.code }}</td>
            <td>{{ file.name }}</td>
            <td>{{ file.location }}</td>
            <td>
              <a :href="file.pdfURL" :download="`${file.name}.pdf`">Baixar</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Cadastrar Novo Arquivo</h2>
      <form @submit.prevent="addFile">
        <input v-model="newFile.code" placeholder="Código" required />
        <input v-model="newFile.name" placeholder="Nome" required />
        <input v-model="newFile.location" placeholder="Ex: Armário A1, Gaveta 3" required />
        <input type="file" @change="handleFile" accept="application/pdf" required />
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  </div>
</template>

<script setup>

const files = ref([])
const searchTerm = ref('')
const newFile = ref({
  code: '',
  name: '',
  location: '',
  pdf: null
})

function handleFile(event) {
  newFile.value.pdf = event.target.files[0]
}

function addFile() {
  if (!newFile.value.pdf) {
    alert('Selecione um PDF.')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    files.value.push({
      code: newFile.value.code,
      name: newFile.value.name,
      location: newFile.value.location,
      pdfURL: e.target.result
    })

    // Resetar formulário
    newFile.value = { code: '', name: '', location: '', pdf: null }
  }

  reader.readAsDataURL(newFile.value.pdf)
}

const filteredFiles = computed(() => {
  const term = searchTerm.value.toLowerCase()
  return files.value.filter(file =>
    file.code.toLowerCase().includes(term) ||
    file.name.toLowerCase().includes(term)
  )
})

function searchFiles() {
  // A busca já está reativa via computed
}
</script>

<style scoped>
.app {
  display: flex;
  font-family: 'Segoe UI', sans-serif;
  height: 100vh;
  background-color: #f4f4f4;
}

.sidebar {
  width: 220px;
  background-color: #1e293b;
  color: white;
  padding: 20px;
}

.sidebar h2 {
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 10px 0;
}

.sidebar a {
  color: white;
  text-decoration: none;
}

.main {
  flex: 1;
  padding: 20px;
}

.search-box {
  margin: 20px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  margin-bottom: 30px;
}

th, td {
  padding: 12px;
  border: 1px solid #ccc;
  text-align: left;
}

form input {
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 400px;
}

form button {
  padding: 10px 20px;
  background-color: #1e293b;
  color: white;
  border: none;
  cursor: pointer;
}
</style>

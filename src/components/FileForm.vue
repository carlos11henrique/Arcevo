<template>
  <div class="file-form">
    <h1>Cadastrar Arquivo</h1>
    <input type="text" placeholder="Nome do arquivo" v-model="nome" />
    <input type="text" placeholder="Código" v-model="codigo" />
    <input type="file" @change="onFileChange" />
    <button @click="salvar">Salvar</button>
  </div>
</template>

<script>
export default {
  name: 'FileForm',
  data() {
    return {
      nome: '',
      codigo: '',
      arquivo: null
    }
  },
  methods: {
    onFileChange(e) {
      this.arquivo = e.target.files[0];
    },
    salvar() {
      // lógica para salvar (sem PDF)
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 0;
}

input[type="text"],
input[type="file"] {
  padding: 10px;
  margin: 5px;
  width: calc(100% - 20px);
}

button {
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #2563eb;
  color: white;
  border: none;
  cursor: pointer;
}
</style>

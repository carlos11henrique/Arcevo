<!-- FileTable.vue -->
<template>

  <div v-if="files.length">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Código</th>
          <th>Arquivo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="file in files" :key="file.codigo">
          <td>{{ file.nome }}</td>
          <td>{{ file.codigo }}</td>
          <td>
            <a :href="file.pdf" download>Baixar</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>Nenhum arquivo encontrado.</p>
</template>

<script setup>
defineProps(['files'])
</script>

<style >

</style>

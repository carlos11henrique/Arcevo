<!-- FileTable.vue -->
<template>
  <div v-if="files.length">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Código</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="file in files" :key="file.codigo">
          <td>{{ file.nome }}</td>
          <td>{{ file.codigo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>Nenhum arquivo encontrado.</p>
</template>

<script setup>
defineProps(['files'])
</script>

<style>
/* você pode adicionar estilos aqui */
</style>

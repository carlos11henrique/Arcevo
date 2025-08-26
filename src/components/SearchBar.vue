<template>
  <div class="search-box">
    <input type="text" v-model="query" placeholder="Buscar por nome ou código..." />
    <button @click="buscar">Buscar</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      query: ''
    }
  },
  methods: {
    buscar() {
      this.$emit('buscar', this.query);
    }
  }
}
</script>

<style>

</style>

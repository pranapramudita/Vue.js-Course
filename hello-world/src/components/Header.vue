<template>
  <header>
      <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  components: {
  },
  data() {
      return {
          title: 'Warung Makan Prana'
      }
  },
}
</script>

<style scoped>
header{
    background: lightblue;
    padding: 10px;
}

h1{
    color: black;
    text-align: center;
}
</style>

<template>
  <footer>
      <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data() {
      return {
          copyright: 'Copyright 2020 Prana Pramudita K'
      }
  },
}
</script>

<style scoped>
footer{
    background:black;
    padding: 10px;
}

p{
    color: lightblue;
    text-align: center;
}
</style>

<template>
  <footer>
      <p>{{ copyright }}  {{ title }}</p>
  </footer>
</template>

<script>
export default {
    props:{
        title:{
            type: Array,
        }
    },
    data() {
        return {
            copyright: 'Copyright 2020'
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

<template>
  <header>
      <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
    props:{
        title:{
            type: Array,
        }
    },
    methods: {
        changeTitle: function(){
            this.$emit('changeTitle', 'Warung Makan Dika?')
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

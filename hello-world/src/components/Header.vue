<template>
  <header>
      <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from '..//main'

export default {
    props:{
        title:{
            type: Array,
        }
    },
    methods: {
        changeTitle: function(){
            // this.$emit('changeTitle', 'Warung Makan Dika?')
            this.title = 'Warung Makan Dika?'
            bus.$emit('titleChanged', 'Warung Makan Dika?')
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

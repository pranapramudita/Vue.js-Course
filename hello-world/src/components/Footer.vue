<template>
  <footer>
      <p>{{ copyright }}  {{ title }}</p>
  </footer>
</template>

<script>
import { bus } from '..//main'

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
    created(){
        bus.$on('titleChanged', (data) => {
            this.title = data
        })
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

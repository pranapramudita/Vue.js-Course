<template>
  <div>
    <app-header></app-header>
    <app-body v-bind:foods="foods"></app-body>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export default {
  components: {
    'app-header': Header,
    'app-body': Body,
    'app-footer': Footer,
  },
  data() {
    return {
        foods: [
            {name: 'Bakso', Deskripsi: 'Enak', show:false},
            {name: 'Gorengan', Deskripsi: 'Enak', show:false},
            {name: 'Nasi Goreng', Deskripsi: 'Enak', show:false},
            {name: 'Bubur Ayam', Deskripsi: 'Enak', show:false},
            {name: 'Bebek Goreng', Deskripsi: 'Enak', show:false},
            {name: 'Ayam Bakar', Deskripsi: 'Enak', show:false},
        ]
    }
  },
}
</script>

<style>

</style>

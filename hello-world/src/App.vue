<template>
  <div>
    <app-header></app-header>
    <app-body></app-body>
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
  }
}
</script>

<style>

</style>

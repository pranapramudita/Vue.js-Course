<template>
  <div>
    <form-helper>
      <!-- <h2 slot="title"> {{ title }} </h2>
      <p slot="paragraph">I am the paragraph for the slot</p> -->
      <div slot="form-header">
        <h3>Title of the form</h3>
        <p>information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handle">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper'

export default {
  components:{
    'form-helper': formHelper
  },
  data() {
    return {
      title: 'I am a dynamic slot title'
    }
  },
  methods: {
    
  },
}
</script>

<style>

</style>
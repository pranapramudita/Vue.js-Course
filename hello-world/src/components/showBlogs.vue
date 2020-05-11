<template>
  <div id="show-blogs">
      <h1>All Blog Articles</h1>
      <div v-for="(blog, index) in blogs" :key="index" class="single-blog">
          <h3>{{ blog.title }}</h3>
          <article>{{ blog.body }}</article>
      </div>
  </div>
</template>

<script>
export default {
     data() {
         return {
             blogs: []
         }
     },
     methods: {
         
     },
     created() {
         this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
             console.log(data)
             this.blogs = data.body.slice(0,5)
         })
     },
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}

.single-blog{
    padding: 20px;
    margin: 20px;
    box-sizing: border-box;
    background: #eee;
}
</style>
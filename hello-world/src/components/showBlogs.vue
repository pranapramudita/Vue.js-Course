<template>
  <div id="show-blogs">
      <h1>All Blog Articles</h1>
      <input type="text" v-model="search" placeholder="search title blogs">
      <div v-for="(blog, index) in filteredBlogs" :key="index" class="single-blog">
          <h3>{{ blog.title | to-uppercase }}</h3>
          <article>{{ blog.body | snippet }}</article>
      </div>
  </div>
</template>

<script>
export default {
     data() {
         return {
             blogs: [],
             search: '',
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
     computed: {
         filteredBlogs: function(){
             return this.blogs.filter((blog) => {
                 return blog.title.match(this.search)
             })
         }
     },
}
</script>

<style scoped>
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
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
</style>
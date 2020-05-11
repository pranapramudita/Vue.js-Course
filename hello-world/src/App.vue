<template>
  <div>
    <show-blogs></show-blogs>
    <hr>
    <list-blogs></list-blogs>
    <hr>
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog'
import showBlogs from './components/showBlogs'
import listBlogs from './components/listBlogs'

export default {
  components:{
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
  }
}
</script>

<style>
body{
  font-family: Roboto;
}
</style>
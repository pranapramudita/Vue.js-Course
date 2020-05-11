<template>
  <div>
    <show-blogs></show-blogs>
    <hr>
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog'
import showBlogs from './components/showBlogs'

export default {
  components:{
    'add-blog': addBlog,
    'show-blogs': showBlogs,
  }
}
</script>

<style>
body{
  font-family: Roboto;
}
</style>
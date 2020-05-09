<template>
  <div id="add-blog">
      <h2>Add new Blog Post</h2>
      <form>
          <label>Blog Title</label>
          <input type="text" required v-model.lazy="blog.title">
          <label>Blog Content</label>
          <textarea v-model.lazy="blog.content"></textarea>
          <div id="checkbox">
              <label for="">Hiburan</label>
              <input type="checkbox" value="Hiburan" v-model="blog.categories">
              <label for="">Politik</label>
              <input type="checkbox" value="Politik" v-model="blog.categories">
              <label for="">Kuliner</label>
              <input type="checkbox" value="Kuliner" v-model="blog.categories">
              <label for="">Liburan</label>
              <input type="checkbox" value="Liburan" v-model="blog.categories">
          </div>
      </form>
      <div id="preview">
          <h3>Preview Blog</h3>
          <p>Blog title: {{ blog.title }} </p>
          <p>Blog content:</p>
          <p>{{ blog.content }}</p>
          <p>Blog Categories:</p>
          <ul>
              <li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            blog:{
                title: '',
                content: '',
                categories: [],
            }
        }
    },
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkbox input{
    display: inline-block;
    margin-right: 10px;
}

#checkbox label{
    display: inline-block;
}


</style>
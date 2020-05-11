<template>
  <div id="add-blog">
      <h2>Add new Blog Post</h2>
      <form v-if="!submitted">
          <label>Blog Title</label>
          <input type="text" required v-model.lazy="blog.title">
          <label>Blog Content</label>
          <textarea v-model.lazy="blog.content"></textarea>
          <div id="checkbox">
              <label>Hiburan</label>
              <input type="checkbox" value="Hiburan" v-model="blog.categories">
              <label>Politik</label>
              <input type="checkbox" value="Politik" v-model="blog.categories">
              <label>Kuliner</label>
              <input type="checkbox" value="Kuliner" v-model="blog.categories">
              <label>Liburan</label>
              <input type="checkbox" value="Liburan" v-model="blog.categories">
          </div>
          <label>Author:</label>
          <select v-model="blog.author">
              <option v-for="(author, index) in authors" :key="index">{{ author }}</option>
          </select>
          <button v-on:click.prevent="post">Add Blog</button>
      </form>
      <div v-if="submitted">
          <h3>Thanks for your submit!</h3>
      </div>
      <div id="preview">
          <h3>Preview Blog</h3>
          <p>Blog title: {{ blog.title }} </p>
          <p>Blog content:</p>
          <p>{{ blog.content }}</p>
          <p>Blog Categories:</p>
          <ul>
              <li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
          </ul>
          <p>Author: {{ blog.author }} </p>
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
                author: '',
            },
            authors: ['Prana', 'Mark', 'Albert', 'Robert', null],
            submitted: false,
        }
    },
    methods: {
        post: function(){
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.blog.title,
                body: this.blog.content,
                userId: 1,
            }).then(function(data){
                console.log(data)
                this.submitted = true
            })
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
<template>
  <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search title blogs">
        <div v-for="(blog, index) in filteredBlogs" :key="index" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id"><h3 v-rainbow>{{ blog.title | to-uppercase }}</h3></router-link>
            <article>{{ blog.content | snippet }}</article>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'

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
        this.$http.get('https://vue-js-course-f0607.firebaseio.com/posts.json').then(function(data){
            return data.json()
        }).then(function(data){
            var blogsArray = []
            for(let key in data){
                data[key].id = key
                blogsArray.push(data[key])
            }
            this.blogs = blogsArray
        })
    },
    computed: {

    },
    filters: {
        toUppercase(value){
            return value.toUpperCase()
        },
        snippet(value){
            return value.slice(0,100) + "..."
        }
    },
    directives: {
        rainbow: {
            bind(el){
                el.style.color = "#" + Math.random().toString().slice(2,8)
            }
        }
    },
    mixins: [searchMixin]
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
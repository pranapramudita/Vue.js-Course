<template>
    <body>
        <ul>
            <li v-for="(food, index) in foods" :key="index" v-on:click="food.show = !food.show">
                <h2>{{ food.name }}</h2>
                <h3 v-if="food.show">{{ food.Deskripsi }}</h3>
            </li>
        </ul>
        <button v-on:click="deleteFoods">Delete Foods</button>
    </body>
</template>

<script>
export default {
    props: {
        foods:{
            type: Array,
        }
    },
    methods: {
        deleteFoods: function(){
            this.foods.pop()
            this.foods != 1
        }
    },
    // life-cycle hooks
    beforeCreate() {
        alert('beforeCreate')
    },
    created() {
        alert('created')
    },
    beforeMount() {
        alert('beforeMount')
    },
    mounted() {
        alert('mounted')
    },
    beforeUpdate() {
        alert('beforeUpdate')
    },
    updated() {
        alert('updated')
    },
}
</script>

<style scoped>
body{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
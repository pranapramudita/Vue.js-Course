<template>
    <body>
        <ul>
            <li v-for="(food, index) in foods" :key="index" v-on:click="food.show = !food.show">
                <h2>{{ food.name }}</h2>
                <h3 v-if="food.show">{{ food.Deskripsi }}</h3>
            </li>
        </ul>
    </body>
</template>

<script>
export default {
    data() {
        return {
            foods: [
                {name: 'Bakso', Deskripsi: 'Enak', show:false},
                {name: 'Gorengan', Deskripsi: 'Enak', show:false},
                {name: 'Nasi Goreng', Deskripsi: 'Enak', show:false},
                {name: 'Bubur Ayam', Deskripsi: 'Enak', show:false},
                {name: 'Bebek Goreng', Deskripsi: 'Enak', show:false},
                {name: 'Ayam Bakar', Deskripsi: 'Enak', show:false},
            ]
        }
    },
}
</script>

<style>
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
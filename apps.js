var app = new Vue({
    el: '#app',
    data: {
        age: 20,
    },
    methods: {
        add: function(inc){
            this.age += inc
        },
        click: function(){
            alert('You clicked me')
        },
    },
})
var app = new Vue({
    el: '#app',
    data: {
        // data and methods
        name: 'Prana',
        x: 0,
    },
    methods: {
        // data and methods
        greet: function(time){
            return 'Good '+ time + ' ' + this.name
        },
        power: function(x){
            return x**2
        },
    },
})
var app = new Vue({
    el: '#app',
    data: {
        // data and methods
        name: 'Prana',
        age: 20,
        website: 'http://www.google.com/',
        websiteTags: '<a href=http://www.google.com/>Google</a>',
        x: 0,
        y: 0,
    },
    methods: {
        // data and methods
        greet: function(time){
            return 'Good '+ time + ' ' + this.name
        },
        power: function(x){
            return x**2
        },
        
        // events
        add: function(inc){
            this.age += inc
        },
        substract: function(dec){
            this.age -= dec
        },

        updateXY: function(event){
            console.log(event)
            this.x = event.offsetX
            this.y = event.offsetY
        },

        click: function(){
            alert('You clicked me')
        },
        
    },
})
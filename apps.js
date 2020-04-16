var app = new Vue({
    el: '#app',
    data: {
        // data and methods
        name: 'Prana',
        age: 20,
        website: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa',
        websiteTags: '<a href=https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa>Vue JS 2 Tutorial</a>',
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        green: false,
        red: true,
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

        // events modifier 
        click: function(){
            alert('You clicked me')
        },
        
        // keyboard events
        logName: function(){
            console.log('You entered your name')
        },
        logAge: function(){
            console.log('You entered your age')
        },
    },
    computed: {
        // Computed Properties
        addToA: function(){
            console.log('addToA')
            return this.a + this.age
        },
        addToB: function(){
            console.log('addToB')
            return this.b + this.age
        },
        compClasses: function(){
            return{
                green: this.green,
                red: this.red
            }
        },

        // Dynamic CSS Classes
        colorFunc: function(){
            if(this.green){
                return 'red'
            }else{
                return 'green'
            }
        }
    },
})
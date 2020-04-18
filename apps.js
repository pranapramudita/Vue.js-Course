var app = new Vue({
    el: '#app',
    data: {
        name: 'Prana',
        age: 20,
    },
    methods: {
        logName: function(){
            console.log('You entered your name')
        },
        logAge: function(){
            console.log('You entered your age')
        },
    },
})
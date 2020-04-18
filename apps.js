var app = new Vue({
    el: '#app',
    data: {
        green: false,
        red: true,
    },
    methods: {
    },
    computed: {
        compClasses: function(){
            return{
                green: this.green,
                red: this.red
            }
        },
    },
})
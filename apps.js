var app = new Vue({
    el: '#app',
    data: {
        favFood: '-',
    },
    methods: {
        readRefsFood: function(){
            console.log(this.$refs)
            this.favFood = this.$refs.inputFood.value
        },
        readRefsChoiceFood: function(){
            console.log(this.$refs)
            this.favFood = this.$refs.choiceFood.innerText
        },
    },
    computed: {
        
    },
})
Vue.component('greeting', {
    template: '<p>Hey {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
    data: function(){
        return {
            name: 'Prana'
        }
    },
    methods: {
        changeName: function(){
            this.name = 'Candy'
        }
    },
});

new Vue({
    el: '#vue-app-one',
});

new Vue({
    el: '#vue-app-two',
});
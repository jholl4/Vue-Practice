
const app = Vue.createApp({
    data() {
        return {
            name: 'Josh',
            age: 39,
            imgURL: 'https://img3.wikia.nocookie.net/__cb20140512174146/warhammer40k/images/b/bd/Loken_3.jpg',
            randomNum: Math.random(),
        }
    },
    methods: {
        ageInFiveYears() {
            return this.age + 5;
        },
        favNumber() {
            return Math.random().toFixed(2);
        },
    },
    computed: {
        randomNumComputed() {
            return Math.random().toFixed(2);
        },
    },
});

app.mount('#assignment');
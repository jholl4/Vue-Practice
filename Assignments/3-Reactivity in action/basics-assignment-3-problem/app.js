const app = Vue.createApp({
    data() {
        return {
            number: 0,
            targetNumber: 37,
        };
    },
    computed: {
        result() {
            if(this.number === 0) {
                return 'Click a button!'
            }else if (this.number < this.targetNumber) {
                return 'Not there yet...';
            }else if (this.number > this.targetNumber) {
                return 'Too much!';
            }else {
                return this.number;
            }
        }
    },
    watch: {
        result(value) {
            setTimeout(() => {
                if(value != 'Click a button!') {
                    this.number = 0;
                }
            }, 5000);
        }
    },
    methods: {
        addFive() {
            this.number += 5;
        },
        addOne() {
            this.number += 1;
        },
    }
});

app.mount('#assignment');
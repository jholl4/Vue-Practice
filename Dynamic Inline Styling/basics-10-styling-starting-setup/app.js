const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    computed: {

    },
    watch: {

    },
    methods: {
        boxSelected(box) {
            switch (box) {
                case 'A':
                    this.boxASelected = true;
                    break;
                case 'B':
                    this.boxBSelected = true;
                    break;
                case 'C':
                    this.boxCSelected = true;
                    break;

            }
        },
    },
});

app.mount('#styling')
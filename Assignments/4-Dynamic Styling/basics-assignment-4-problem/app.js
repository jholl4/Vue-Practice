const app = Vue.createApp({
    data() {
        return {
            input: '',
            paragraphVisible: true,
            color: '',
        };
    },
    computed: {
        pClass() {
            switch(this.input) {
                case 'user1':
                    return 'user1';
                    break;
                case 'user2':
                    return 'user2';
                    break;
                default:
                    return '';
            }
        },
        colorChoice() {
            return 'background-color: ' + this.color + ';';
        }
    },
    methods: {
        toggleParagraph() {
            this.paragraphVisible = !this.paragraphVisible;
        },
    }
});

app.mount('#assignment');
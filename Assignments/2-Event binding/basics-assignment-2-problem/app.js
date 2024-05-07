const app = Vue.createApp({
    data() {
        return {
            text: '',
            finalParagraph: '',
        }
    },
    methods: {
        showAlert() {
            alert('This is an alert!');
        },
        fillParagraph(event) {
            this.text = event.target.value;
        },
        fillOtherParagraph(event) {
            this.finalParagraph = event.target.value;
        },
    }
});

app.mount('#assignment');
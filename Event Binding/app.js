const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      increment: 5,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add(num) {
      this.counter += Number(num);
    },
    reduce(num) {
      this.counter -= Number(num);
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm(event) {
      alert('Submitted!');
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
      this.confirmedName = '';
    },
  }
});

app.mount('#events');

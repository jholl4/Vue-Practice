const { computed } = require("vue");

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      increment: 5,
      name: '',
      confirmedName: '',
    };
  },
  computed: {
    fullName() {
      if (this.name === '') {
        return '';
      }else{
        return this.name + ' ' + 'Holland';
      }
    }
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
      // this.confirmedName = '';
    },
  }
});

app.mount('#events');

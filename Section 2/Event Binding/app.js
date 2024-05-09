const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      increment: 5,
      name: '',
      confirmedName: '',
      // nameWatcherOutput: '',
      lastName: '',
    };
  },
  watch: { // Whenever watched property changes, the matching watcher method will execute
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
    // name(value) { // could also accept a second argument, being the old value of the watched property
    //   if (value === '') {
    //     this.nameWatcherOutput = '';
    //     return;
    //   }else{
    //     this.nameWatcherOutput = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.nameWatcherOutput = '';
    //     return;
    //   }else{
    //     this.nameWatcherOutput = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }else{
        return this.name + ' ' + this.lastName;
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
      this.lastName = '';
      // this.confirmedName = '';
    },
  }
});

app.mount('#events');

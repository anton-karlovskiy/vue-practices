
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  watch: {
    name(value) {
      if (this.value === '') {
        this.fullname = '';
      } else {
        this.fullname = value + ' ' + 'Karlovskiy';
      }
    }
  },
  computed: {
    // fullname() {
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Karlovskiy';
    // }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');

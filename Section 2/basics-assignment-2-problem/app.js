const app = Vue.createApp({
  data() {
    return {
      output1: '',
      output2: '',
      confirmedOutput: ''
    };
  },
  methods: {
    alert() {
      alert('Show alert clicked!');
    },
    setOutput1(event) {
      this.output1 = event.target.value;
    },
    setOutput2(event) {
      this.output2 = event.target.value;
    },
    confirmInput() {
      this.confirmedOutput = this.output2;
    },
  },
});

app.mount('#assignment');

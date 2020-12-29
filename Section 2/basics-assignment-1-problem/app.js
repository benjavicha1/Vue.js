const assignment = Vue.createApp({
  data() {
    return {
      name: 'Ben',
      age: 25,
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png',
    };
  },
  methods: {
    calculateAge() {
        return this.age + 5;
    },
    outputRandomNumber() {
      return Math.random();
    },
  },
});

assignment.mount('#assignment');

const { createApp } = Vue;

createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      middleName: '',
      url: 'https://google.com',
      rawUrl: '<a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>',
      age: 20,
      isPurple: false,
      textColor: '',
      size: 150,
      mode: 1,
      birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots',],
      people: [
        { name: 'John', age: 20, },
        { name: 'Rick', age: 18, },
        { name: 'Amy', age: 33, },
      ],
    }
  },
  methods: {
    incrementAge() {
      this.age++;
    },
    updateLastName(event, message) {
      // event.preventDefault();
      console.log('########################');
      console.log(message);
      console.log('########################');

      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
    },
    circlePurple() {
      return {purple: this.isPurple}
    }
  },
  watch: {
    age() {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    }
  }
}).mount('#app');

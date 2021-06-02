/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      anotherMessage: "Vue is pretty cool",
      showInfo: false,
      fancyColor: false,
      places: ["Estes Park", "Red Rock Canyon", "Red River Gorge"],
      newPlace: "",
      todos: [],
    };
  },
  created: function() {  // responsible for executing code as soon as the DOM is loaded
    this.loadTodos();
  }, 
  methods: {
    changeMessage: function () {
      this.anotherMessage = "Goodbye from Javascript!";
    },
    killMessage: function () {
      this.message = "";
    },
    rezMessage: function () {
      this.message = "I have come back to life!";
    },
    allCaps: function () {
      this.anotherMessage = this.anotherMessage.toUpperCase() + "!!!";
    },
    addNewPlace: function () {
      this.places.push(this.newPlace);
      this.newPlace = "";
    },
    loadTodos: function() {
      axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        console.log(response.data);
        this.todos = response.data;
      });
    }
  }
});

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'You loaded this page on ' + new Date().toLocaleString()
//   }
// });
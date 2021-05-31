/* global Vue */
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
    };
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
    }
    // newMessage: function () {
    //   this.anotherMessage =
    // }
    // Want to figure out how to use an input box and submit button to update variables
  }
});

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'You loaded this page on ' + new Date().toLocaleString()
//   }
// });
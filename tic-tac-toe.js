/* global Vue */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Tic-Tac-Toe!",
      marks: {
        1: null, 2: null, 3: null,
        4: null, 5: null, 6: null,
        7: null, 8: null, 9: null
      },
      turn: "x",
    };
  },
  methods: {
    clickSquare: function(index) {
      if (this.turn === "x") {
        this.marks[index] = "x";
        this.turn = "o";
      } else if (this.turn === "o") {
        this.marks[index] = "o";
        this.turn = "x";
      }
    },
    resetBoard: function() {
      this.marks = {
        1: null, 2: null, 3: null,
        4: null, 5: null, 6: null,
        7: null, 8: null, 9: null
      };
      this.turn = "x";
    },
  }
});
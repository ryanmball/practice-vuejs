/* eslint-disable no-unused-labels */
/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Knives Out", "Forgetting Sarah Marshall", "Liar Liar"],
      newMovie: "",
      moviesList: [],
    };
  },
  methods: {
    addMovie: function () {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    },
    moviesFromApp: function () {
      axios.get("http://localhost:3000/movies").then(response => {
        console.log(response.data);
        response.data.forEach(movie => {
          this.moviesList.push(movie.title);
        });
      });
    },
  },
});
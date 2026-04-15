"use strict";

console.log("Movie App starter...");

let movies = [
  
];

const movieList = document.querySelector("#movie-list");

start();

async function start() {
  console.log("Henter film data...");

  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  movies = await response.json();

  console.log("Hentet", movies.length, "film!");
  showMovies();
}

showMovies();

function showMovies() {
  //movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const highlightClass = movie.rating > 6 ? "movie-card--highlight" : "";

  const html = /* html */ `
    <article class="movie-card ${highlightClass}">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
        <p>Genre: ${movie.genre}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

function addMovie(movie) {
  movies.push(movie);
  showMovies();
}
addMovie({
  title: "Blade Runner 2049",
  year: 2017,
  rating: 8.0,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP3KI1DsalLs_D2ZYLBu3mMJXOxBmYNDeLg&s",
  genre: "Sci-fi",
});







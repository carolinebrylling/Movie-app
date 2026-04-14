"use strict";

console.log("Movie App starter...");

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    Image: "https://en.wikipedia.org/wiki/Inception_%28soundtrack%29",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
  },
];

const movieList = document.querySelector("#movie-list");

showMovies();

function showMovies() {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

movies.push({
  title: "Pulp Fiction",
  year: 1994,
  rating: 8.9,
});

showMovies();
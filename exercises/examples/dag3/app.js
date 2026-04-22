"use strict";

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";

let allMovies = [];

const movieList = document.querySelector("#movie-list");
const genreSelect = document.querySelector("#genre-select");
const movieCount = document.querySelector("#movie-count");

fetchMovies();

async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  populateGenreSelect();
  showMovies(allMovies);

  genreSelect.addEventListener("change", applyGenreFilter);
}

function showMovies(movies) {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }

  movieCount.textContent = `${movies.length}`;
}

function showMovie(movie) {
  const html = `
    <article class="movie-card">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title} (${movie.year})</h3>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

function populateGenreSelect() {
  genreSelect.innerHTML = '<option value="all">Alle genrer</option>';

  const genres = new Set();
  const counts = {};

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
      counts[genre] = (counts[genre] || 0) + 1;
    }
  }

  const sortedGenres = [...genres].sort((a, b) => a.localeCompare(b));

  for (const genre of sortedGenres) {
    const label = `${genre} (${counts[genre]})`;

    genreSelect.insertAdjacentHTML(
  "beforeend",
  `<option value="${genre}">${label}</option>`
);
  }
}

function applyGenreFilter() {
  const selectedGenre = genreSelect.value;

  if (selectedGenre === "all") {
    showMovies(allMovies);
    return;
  }

  const filteredMovies = allMovies.filter(function (movie) {
    return movie.genre.includes(selectedGenre);
  });

  showMovies(filteredMovies);
};




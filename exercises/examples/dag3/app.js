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
  function showMovies(movies) {
  movieCount.textContent = `Viser ${movies.length} film`;
}

  genreSelect.addEventListener("change", applyGenreFilter);
}

function populateGenreSelect() {
  // Ryd dropdownen først (behold evt. "Alle genrer")
  genreSelect.innerHTML = '<option value="all">Alle genrer</option>';

  // Saml alle genrer og tæl hvor mange film der er i hver
  const genres = new Set();
  let counts = {};
  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
      counts[genre] = (counts[genre] || 0) + 1;
    }
  }
  const sortedGenres = [...genres].sort((a, b) => a.localeCompare(b));

  // Opret <option> for hver genre med antal
  for (const genre of sortedGenres) {
    const label = `${genre} (${counts[genre]})`;
    genreSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${genre}">${label}</option>`,
    );
  }
}
function applyGenreFilter() {
  const selectedGenre = genreSelect.value;

  if (selectedGenre === "all") {
    showMovies(allMovies);
    return;
  }};


allMovies.filter(function (movie) {
  return movie.genre.includes("Action");
});




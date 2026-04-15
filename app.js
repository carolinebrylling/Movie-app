"use strict";

console.log("Movie App starter...");

const movies = [
  {
    title: "Harry Potter og de vises sten",
    year: 2010,
    rating: 8.8,
    image:"https://i-viaplay-com.akamaized.net/viaplay-prod/700/624/1560520133-34f04ec395e9442fadcc56f8004f54e19df1015c.jpg?width=400&height=600",
  },
  {
    title: "Barbie",
    year: 2025,
    rating: 8.7,
    image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v8_am.jpg",
  },
  {
    title: "The drama",
    year: 2026,
    rating: 8.6,
    image: "https://www.nfbio.dk/sites/nfbio.dk/files/styles/movie_poster/public/media-images/2026-02/gmnt-a14faa59bc-1365388-vst-699ee2cb45b92.jpeg?itok=JPogrG_e",
  },
  {
    title: "Another cinderella story",
    year: 2008,
    rating: 9.0,
    image: "https://upload.wikimedia.org/wikipedia/pt/2/27/Another_Cinderella_Story.jpg",
  },
  {
    title: "Dune",
    year: 2021,
    rating: 9.6,
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  },
  {
  title: "Mean girls",
  year: 2004,
  rating: 8.9,
  image: "https://m.media-amazon.com/images/I/91GiVmZ1dQL._AC_UF894,1000_QL80_.jpg",
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
  const highlightClass = movie.rating > 8.5 ? "movie-card--highlight" : "";

  const html = /* html */ `
    <article class="movie-card ${highlightClass}">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}



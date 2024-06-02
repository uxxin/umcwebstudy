import React from "react";
import { movies } from "./movieData";
import "./App.css";

function App() {
  return (
    <div className="background">
      <h1 className="header-title">Movies</h1>
      <hr />
      <div className="movie-container">
        {movies.results.map((movie, index) => (
          <div key={index} className="content-container">
            <div>
              <div className="movie-overview">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </div>
              <div className="movie-poster-container">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </div>

              <div className="movie-data">
                <div>{movie.title}</div>
                <div>{movie.vote_average}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

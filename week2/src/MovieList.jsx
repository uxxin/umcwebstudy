import React from "react";
import Movie from "./movie";
import { movies } from "./movieData";

function MovieList() {
  return (
    <div className="movie-container">
      {movies.results.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          overview={movie.overview}
          posterPath={movie.poster_path}
          voteAverage={movie.vote_average}
        />
      ))}
    </div>
  );
}

export default MovieList;

import React from "react";

function Movie({ title, overview, posterPath, voteAverage }) {
  return (
    <div className="content-container">
      <div>
        <div className="movie-overview">
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>

        <div className="movie-poster-container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={title}
            className="movie-poster"
          />
        </div>

        <div className="movie-data">
          <div>{title}</div>
          <div>{voteAverage}</div>
        </div>
      </div>
    </div>
  );
}

export default Movie;

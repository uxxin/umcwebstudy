import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Movie() {
  const [movielist, setmovielist] = useState([]);
  console.log(movielist);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=867fee86b2e4161fac32d4b7080bc0db"
    )
      .then((res) => res.json())
      .then((json) => setmovielist(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Container>
      {movielist.map((movie) => (
        <Card key={movie.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <Info>
            <MovieTitle>{movie.title}</MovieTitle>
            <Rating>{movie.vote_average.toFixed(1)}</Rating>
          </Info>
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(16.66% - 20px); /* Subtracting margin to fit 6 cards per row */
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff; /* Added background color for better contrast */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const MovieTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
  color: #000; /* Set title color to black */
`;

const Rating = styled.div`
  font-size: 0.9em;
  text-align: center;
  color: #555;
`;

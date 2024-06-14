import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import { getMovie } from "../apis/movie";

export default function Movie() {
  const [movielist, setmovielist] = useState([]);

  useEffect(() => {
    getMovie()
      .then((res) => {
        //getmovie의 결과값을 res로 받음(= response.data)
        console.log(res);
        setmovielist(res.results); //movielist 저장
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    //console.log(movielist);
  }, [movielist]);

  return (
    <Container>
      {movielist.map((movie) => (
        <MovieCard movie={movie} /> //key-value 느낌
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff; /* Changed background color to white */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const MovieTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
  color: black; /* Changed text color to black */
`;

const Rating = styled.div`
  font-size: 0.9em;
  text-align: center;
  color: #555;
`;

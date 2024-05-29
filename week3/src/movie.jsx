import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

export default function Movie() {
  const [movielist, setmovielist] = useState([]); //배열 생성해서 저장
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
        <Card>
          <Image src={https://image.tmdb.org/t/p/w500${movie.poster_path}} />
          <Title>
            <div>{movie.title}</div>
            <div>{movie.vote_average.toFixed(1)}</div>
          </Title>
        </Card>
      ))}
    </Container>
  );
}
const Container = styled.div
  display: flex;
  flex-wrap: wrap;
;
const Card = styled.div
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 400px;
  margin-left: 95px;
  margin-top: 40px;
  border-radius: 15px;
;
const Image = styled.img
  display: flex;
  width: 250px;
  height: 350px;
  margin: none;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
;
const Title = styled.div
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 50px;
  margin: none;
  background-color: rgb(236, 249, 249);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
;
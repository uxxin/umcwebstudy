import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NowPlayingPage = () => {
  const [nowPlayingList, setNowPlaying] = useState([]);

  const getNowPlaying = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=664cb6a408c7321bb643e21b1ca7f837"
    )
      .then((res) => res.json())
      .then((json) => setNowPlaying(json.results));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  useEffect(() => {
    console.log(nowPlayingList);
  }, [nowPlayingList]);

  return (
    <Container>
      {nowPlayingList.map(
        (
          movie //map이 for문 movie가 i 느낌
        ) => (
          <Card key={movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <Title>
              <MovieTitle>{movie.title}</MovieTitle>
              <Rating>{movie.vote_average.toFixed(1)}</Rating>{" "}
              {/* toFixed는 소수점 한자리 */}
            </Title>
          </Card>
        )
      )}
    </Container>
  );
};

export default NowPlayingPage;

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

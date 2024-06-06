import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]); //[] 빈 배열 (초기값)

  useEffect(() => {
    console.log(query);
  }, [query]); //[query]라는 값이 바뀔 때 마다 console.log를 실행

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]); //[searchResult]라는 값이 바뀔 때 마다 console.log를 실행

  const searchMovie = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=664cb6a408c7321bb643e21b1ca7f837`
    )
      .then((res) => res.json())
      .then((json) => setSearchResult(json.results));
  };

  const navigation = useNavigate();

  const toDetailPage = (movie) => {
    navigation(`/movie/${movie.id}`, { state: { movie: movie } });
  };

  return (
    <MainPageContainer>
      <WelcomeText>환영합니다!</WelcomeText>
      <Subtitle>Find your movie!</Subtitle>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="영화를 검색하세요..."
          onChange={handleChange}
        />
        <SearchButton onClick={() => searchMovie(query)}>🔍</SearchButton>
      </SearchContainer>
      <MovieContainer>
        {searchResult.map((movie) => (
          <Card key={movie.id} onClick={() => toDetailPage(movie)}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <Title>
              <MovieTitle>{movie.title}</MovieTitle>
              <Rating>{movie.vote_average.toFixed(1)}</Rating>
            </Title>
          </Card>
        ))}
      </MovieContainer>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto; /* 화면 전체 높이를 사용 */
  width: 100vw; /* 화면 전체 너비를 사용 */
  //background-color: #fff; /* 배경 색상 추가 */
`;

const WelcomeText = styled.h1`
  color: #333;
  font-size: 2em;
`;

const Subtitle = styled.h2`
  color: #555;
  font-size: 1.5em;
  margin-top: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const SearchButton = styled.button`
  margin-left: 10px;
  font-size: 1.2em; /* Adjusted font size */
  cursor: pointer;
  border: none;
  background: none;
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

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default MainPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

const Container = styled.div`
  height: 100%;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: black;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const Search = styled.div`
  width: 100%;
  text-align: center;
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 30px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBarContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  margin: 20px auto;
`;

const SearchInput = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
`;

const SearchButton = styled.div`
  display: flex;
  margin-left: 15px;
  cursor: pointer;
`;

const SearchResultContainer = styled.div`
  background-color: black;
  width: 60%;
  height: 10%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  border-radius: 15px;
  overflow-y: scroll;
`;

const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;

const PosterImage = styled.img`
  width: 200px;
  height: 300px;
`;

const MovieTitle = styled.div`
  font-size: 16px;
  color: white;
`;

const MainPage = () => {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 1000);
  const [searchedMovie, setSearchedMovie] = useState([]);
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  useEffect(() => {
    const searchMovie = async (keyword) => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
            params: {
              include_adult: false,
              language: "ko-KR",
              page: 1,
            },
          }
        );
        setSearchedMovie(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    if (keyword.trim() !== "") {
      // 검색어가 비어있지 않은 경우에만 검색 수행
      searchMovie(debouncedKeyword);
    } else {
      setSearchedMovie([]); // 검색어가 비어있는 경우 검색 결과를 초기화
    }
  }, [debouncedKeyword]);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <Container>
      <Banner>환영합니다.</Banner>
      <Search>
        🎬 Find Your Movies!
        <SearchBarContainer>
          <SearchInput
            type="text"
            placeholder="영화 제목을 입력해주세요"
            value={keyword}
            onChange={handleChange}
          />
          <SearchButton>🔎</SearchButton>
        </SearchBarContainer>
        <SearchResultContainer>
          {searchedMovie.map((movie) => (
            <SearchResult key={movie.id} onClick={() => handleClick(movie)}>
              <PosterImage
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </SearchResult>
          ))}
        </SearchResultContainer>
      </Search>
    </Container>
  );
};

export default MainPage;

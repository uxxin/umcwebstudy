import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";

const MainPage = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4; // 한 줄에 보여줄 영화 카드 수

  useEffect(() => {
    console.log(query);
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  const debouncedSearch = debounce((query) => {
    searchMovie(query);
  }, 500);

  const searchMovie = (query) => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=664cb6a408c7321bb643e21b1ca7f837&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((json) => {
        setSearchResult(json.results);
        setTotalPages(json.total_pages);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const navigation = useNavigate();

  const toDetailPage = (movie) => {
    navigation(`/movie/${movie.id}`, { state: { movie: movie } });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderMovies = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return searchResult.slice(startIndex, endIndex).map((movie) => (
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
    ));
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
        {loading ? <LoadingText>로딩 중입니다...</LoadingText> : renderMovies()}
      </MovieContainer>
      {totalPages > 1 && (
        <PaginationContainer>
          <PageInfo>
            현재 페이지: {currentPage} / 총 페이지: {totalPages}
          </PageInfo>
          <PaginationButton
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            이전 페이지
          </PaginationButton>
          <PaginationButton
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            다음 페이지
          </PaginationButton>
        </PaginationContainer>
      )}
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 200px; /* 좌우 여백 추가 */
`;

const LoadingText = styled.div`
  font-size: 1.2em;
  color: #333;
  text-align: center;
  margin: 20px 0;
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
  font-size: 1.2em;
  cursor: pointer;
  border: none;
  background: none;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(25% - 20px); /* 한 줄에 4개씩 배치 */
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
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
  background-color: #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const MovieTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
  color: black;
`;

const Rating = styled.div`
  font-size: 0.9em;
  text-align: center;
  color: #555;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const PageInfo = styled.div`
  margin-right: 10px; /* 간격 조정 */
  color: black;
`;

const PaginationButton = styled.button`
  font-size: 1em;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#419dff")};
  color: #fff;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 10px; /* 간격 조정 */
  }
`;

const ButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
`;

export default MainPage;

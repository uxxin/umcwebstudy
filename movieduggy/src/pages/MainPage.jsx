import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <MainPageContainer>
      <WelcomeText>환영합니다!</WelcomeText>
      <Subtitle>Find your movie!</Subtitle>
      <SearchContainer>
        <SearchInput type="text" placeholder="영화를 검색하세요..." />
        <SearchButton>🔍</SearchButton>
      </SearchContainer>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이를 사용 */
  width: 100vw; /* 화면 전체 너비를 사용 */
  background-color: #fff; /* 배경 색상 추가 */
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

export default MainPage;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //Link 추가
import styled from "styled-components";
import Header2 from "./components/header2";
import Movie from "./pages/Movie";
import MainPage from "./pages/MainPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import Upcoming from "./pages/Upcoming";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <AppContainer>
        <HeaderContainer>
          <Header to="/">UMC Movie</Header>
          <Header2 />
        </HeaderContainer>
        <Content>
          <Routes>
            <Route path="/movie" element={<Movie />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/popular" element={<PopularPage />} />
            <Route path="/nowplaying" element={<NowPlayingPage />} />
            <Route path="/toprated" element={<TopRatedPage />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/movie/:id" element={<DetailPage />} />
          </Routes>
        </Content>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  min-height: 100vh;
  //height: 100vh;
  width: 100vw;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background-color: #5aaaff;
  padding: 8px;
  //border-radius: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; //이거 안하면 여백 생김
`;

const Header = styled(Link)`
  font-size: 2em;
  color: white;
  margin: 0;
  padding: 10px;
  text-decoration: none; /* 링크 스타일을 제거합니다 */
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;

export default App;

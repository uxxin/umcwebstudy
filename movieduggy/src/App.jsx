import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //Link 추가
import styled from "styled-components";
import Header2 from "./header2";
import Movie from "./Movie";
import MainPage from "./MainPage";
import NowPlayingPage from "./NowPlayingPage";
import PopularPage from "./PopularPage";
import TopRatedPage from "./TopRatedPage";
import Upcoming from "./Upcoming";

function App() {
  return (
    <Router>
      <AppContainer>
        <HeaderContainer>
          <Header to="/mainpage">UMC Movie</Header>
          <Header2 />
        </HeaderContainer>
        <Content>
          <Routes>
            <Route path="/" element={<Movie />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/popular" element={<PopularPage />} />
            <Route path="/nowplaying" element={<NowPlayingPage />} />
            <Route path="/toprated" element={<TopRatedPage />} />
            <Route path="/upcoming" element={<Upcoming />} />
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
  padding: 20px;
  background-color: #f0f0f0;
  //min-height: 100vh;
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
  padding: 20px;
  padding-top: 60px;
`;

export default App;

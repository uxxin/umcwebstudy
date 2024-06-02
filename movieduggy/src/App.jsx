import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header2 from "./header2";
import Movie from "./Movie";

function App() {
  return (
    <Router>
      <AppContainer>
        <HeaderContainer>
          <Header>UMC Movie</Header>
          <Header2 />
        </HeaderContainer>
        <Content>
          <Routes>
            <Route path="/" element={<Movie />} />
            <Route path="/popular" element={<div>Popular Movies</div>} />
            <Route path="/nowplaying" element={<div>Now Playing Movies</div>} />
            <Route path="/toprated" element={<div>Top Rated Movies</div>} />
            <Route path="/upcoming" element={<div>Upcoming Movies</div>} />
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
  min-height: 100vh;
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

const Header = styled.h1`
  font-size: 2em;
  color: white;
  margin: 0;
  padding: 10px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  padding-top: 60px;
`;

export default App;

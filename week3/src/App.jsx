import React from "react";
import Movie from "./Movie";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Header>Movie List</Header>
      <Movie />
    </AppContainer>
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

const Header = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

export default App;

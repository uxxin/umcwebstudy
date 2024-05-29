import React from "react";
import MovieList from "./MovieList";
import "./App.css";

function App() {
  return (
    <div className="background">
      <h1 className="header-title">Movies</h1>
      <hr />
      <MovieList />
    </div>
  );
}

export default App;

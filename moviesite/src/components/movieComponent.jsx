import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  padding: 100px 40px;
`;

const ContentContainer = styled.div`
  background-color: black;
  padding: 10px;
  position: relative;

  &:hover .movie-poster-container {
    opacity: 0.3;
  }
`;

const MovieOverview = styled.div`
  position: absolute;
  font-size: 12px;

  display: none;
  color: white;

  padding: 20px;

  z-index: 999;

  word-wrap: break-word;

  ${ContentContainer}:hover & {
    display: block;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  z-index: 1;
`;

const MovieData = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 50px;
`;

const MovieComponent = ({ movieData }) => {
  // 문법이라서 이렇게 외워서 사용하면 됨
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <MovieContainer>
      {movieData.map((movie, index) => (
        <ContentContainer key={index} onClick={() => handleClick(movie)}>
          <div>
            <MovieOverview className="movie-overview">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </MovieOverview>

            <div className="movie-poster-container">
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            </div>

            <MovieData>
              <div>{movie.title}</div>
              <div>{movie.vote_average}</div>
            </MovieData>
          </div>
        </ContentContainer>
      ))}
    </MovieContainer>
  );
};

export default MovieComponent;

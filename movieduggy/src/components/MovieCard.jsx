import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  // movie 값이 하나가 아니라 객체 형태이기 때문에 {}로 감싸줌.

  const navigation = useNavigate();

  const toDetailPage = (movie) => {
    navigation(`/movie/${movie.id}`, { state: { movie: movie } });
  };

  return (
    <Card key={movie.id} onClick={() => toDetailPage(movie)}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <Title>
        <MovieTitle>{movie.title}</MovieTitle>
        <Rating>⭐{movie.vote_average.toFixed(1)}</Rating>
      </Title>
    </Card>
  );
};

export default MovieCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(16.66% - 20px);
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
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  flex-grow: 1;
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
  margin-top: auto;
`;

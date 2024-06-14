import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import StarRating from "../components/StarRating";

const DetailPage = () => {
  const {
    state: { movie },
  } = useLocation();

  const overviewText =
    movie.overview.length > 0
      ? movie.overview
      : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.";

  return (
    <Container
      backgroundUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    >
      <Overlay />
      <Wrapper>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieDetail>
          <Title>{movie.title}</Title>
          <AverageVote>
            <AverageVoteTitle>평점</AverageVoteTitle>
            <StarRating rating={movie.vote_average} />
          </AverageVote>
          <ReleaseDate>
            <DateTitle>개봉일</DateTitle>
            <Date>{movie.release_date}</Date>
          </ReleaseDate>
          <Overview>줄거리</Overview>
          <OverviewDetail>{overviewText}</OverviewDetail>
        </MovieDetail>
      </Wrapper>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.backgroundUrl}) no-repeat center
    center/cover;
  position: relative;
  color: #fff;
  padding: 20px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: rgba(40, 40, 40, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const MovieDetail = styled.div`
  flex: 1;
  margin-left: 20px;
  background-color: rgba(58, 58, 58, 0.9);
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2.4em;
  margin-bottom: 20px;
  color: #ff6347;
`;

const AverageVote = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const AverageVoteTitle = styled.h2`
  font-size: 1.2em;
  margin-right: 10px;
  color: #ffa07a;
`;

const ReleaseDate = styled.div`
  margin-bottom: 20px;
`;

const DateTitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 5px;
  color: #ffa07a;
`;

const Date = styled.div`
  font-size: 1.1em;
  color: #ffffff;
`;

const Overview = styled.h2`
  font-size: 1.4em;
  margin-bottom: 10px;
  color: #ffa07a;
`;

const OverviewDetail = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #f5f5f5;
`;

import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailPage = () => {
  const {
    state: { movie },
  } = useLocation();

  return (
    <Container>
      <Wrapper>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        ></Poster>
        <MovieDetail>
          <Title>{movie.Title}</Title>
          <AverageVote>
            <AverageVoteTitle>평점</AverageVoteTitle>
            <Star>{movie.vote_average}</Star>
          </AverageVote>
          <ReleaseDate>
            <DateTitle>개봉일</DateTitle>
            <Date>{movie.release_date}</Date>
          </ReleaseDate>
          <Overview>줄거리</Overview>
          <OverviewDetail>{movie.overview}</OverviewDetail>
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
  background-color: #322e2e;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Poster = styled.img`
  width: 300px;
  padding: 20px;
`;

const MovieDetail = styled.div`
  background-color: #d72727;
  padding: 20px;
`;

const Title = styled.div``;

const AverageVote = styled.div``;

const AverageVoteTitle = styled.div``;

const Star = styled.div``;

const ReleaseDate = styled.div``;

const DateTitle = styled.div``;

const Date = styled.div``;

const Overview = styled.div``;

const OverviewDetail = styled.div``;

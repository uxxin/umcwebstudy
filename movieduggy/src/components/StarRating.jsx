import React from "react";
import styled from "styled-components";

const StarRating = ({ rating }) => {
  const stars = [];
  const roundedRating = Math.floor(rating); // 평점을 내림한 정수 값

  for (let i = 0; i < roundedRating; i++) {
    stars.push(<Star key={i}>&#9733;</Star>); // 별 모양(★)을 추가
  }

  return <Rating>{stars}</Rating>;
};

const Rating = styled.div`
  font-size: 1.2em;
  color: #ffd700;
`;

const Star = styled.span`
  margin-right: 5px;
`;

export default StarRating;

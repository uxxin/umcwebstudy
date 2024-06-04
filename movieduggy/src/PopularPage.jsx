import React from "react";

const PopularPage = () => {
  return (
    <Container>
      <h1>Popular Movies</h1>
      {/* Popular movies content */}
    </Container>
  );
};

export default PopularPage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 8%;
  background-color: #717ada;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: fixed;
  z-index: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HomeLogo = styled(Link)`
  text-decoration: none;
  padding: 15px;
  color: white;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    color: black;
    transform: scale(1.1);
  }
`;

const LoginLogout = styled(Link)`
  padding: 15px;
  color: yellow;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  padding: 15px;
  color: ${(props) => (props.$active ? "skyblue" : "white")};
  font-weight: ${(props) => (props.$active ? "700" : "500")};

  &:hover {
    transform: scale(1.2);
    color: skyblue;
  }
`;

const Header = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Container>
      <ContentContainer>
        <HomeLogo to="/">UMC Movie</HomeLogo>
      </ContentContainer>
      <ContentContainer>
        <LoginLogout to="/signup">회원가입</LoginLogout>
        <StyleLink to="/popular" $active={location.pathname == "/popular"}>
          Popular
        </StyleLink>
        <StyleLink
          to="/nowplaying"
          $active={location.pathname == "/nowplaying"}
        >
          Now Playing
        </StyleLink>
        <StyleLink to="/toprated" $active={location.pathname == "/toprated"}>
          Top Rated
        </StyleLink>
        <StyleLink to="/upcoming" $active={location.pathname == "/upcoming"}>
          Upcoming
        </StyleLink>
      </ContentContainer>
    </Container>
  );
};

export default Header;

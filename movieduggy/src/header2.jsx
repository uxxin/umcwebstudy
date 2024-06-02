import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LoginButton = styled.div`
  padding: 16px;
  color: #f7ff5d;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    color: #f7ff5d;
  }
`;

const NavButton = styled(Link)`
  padding: 16px;
  color: white;

  &:hover {
    scale: 1.1;
    color: white;
  }
`;

const Header2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const navigate = useNavigate();

  return (
    <Container>
      {isLoggedIn ? (
        <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
      ) : (
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      )}

      <NavButton to="/popular">Popular</NavButton>
      <NavButton to="/nowplaying">NowPlaying</NavButton>
      <NavButton to="/toprated">TopRated</NavButton>
      <NavButton to="/upcoming">Upcoming</NavButton>
    </Container>
  );
};

export default Header2;

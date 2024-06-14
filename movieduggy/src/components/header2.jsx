import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken"); //key는 무조건 "" 사용
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [localStorage.getItem("accessToken")]); //accessToken을 함수 안에서 정의했기 때문에 사용하려면 이렇게

  const navigation = useNavigate();

  const handleLogin = () => {
    navigation("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigation("/");
  };

  return (
    <Container>
      {isLoggedIn ? ( //보통 local storage에 토큰이 있냐 없냐로 판단
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

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { signUp } from "../apis/auth";
import { useNavigate } from "react-router-dom";
function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    username: "",
    password: "",
    passwordCheck: "",
  });
  const navigation = useNavigate();

  const handleSignUp = async () => {
    //가입하기 눌렀을 때 실행할 내용
    const result = await signUp({
      //response.data가 result에 저장(토큰, username / network->preview: signup에서 확인 가능)
      name: formData.name,
      email: formData.email,
      age: formData.age,
      username: formData.username,
      password: formData.password,
      passwordCheck: formData.passwordCheck,
    });

    localStorage.setItem("accessToken", result.token);
    alert("회원가입 성공!");
    navigation("/");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <Container>
      <Wrapper>
        <Name>
          <InputLabel>이름</InputLabel>
          <input name="name" onChange={handleChange}></input>
        </Name>
        <Email>
          <InputLabel>이메일</InputLabel>
          <input type="email" name="email" onChange={handleChange}></input>
        </Email>
        <Age>
          <InputLabel>나이</InputLabel>
          <input name="age" onChange={handleChange}></input>
        </Age>
        <UserName>
          <InputLabel>닉네임</InputLabel>
          <input name="username" onChange={handleChange}></input>
        </UserName>
        <Password>
          <InputLabel>비밀번호</InputLabel>
          <input
            type="password"
            name="password"
            onChange={handleChange}
          ></input>
        </Password>
        <PasswordCheck>
          <InputLabel>비밀번호 확인</InputLabel>
          <input
            type="password"
            name="passwordCheck"
            onChange={handleChange}
          ></input>
        </PasswordCheck>
        <Submit onClick={handleSignUp}>
          <InputLabel>가입하기</InputLabel>
        </Submit>
      </Wrapper>
    </Container>
  );
}

export default SignupPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

const InputLabel = styled.div`
  color: black;
`;

const Name = styled.div``;
const Email = styled.div``;
const Age = styled.div``;
const UserName = styled.div``;
const Password = styled.div``;
const PasswordCheck = styled.div``;

const Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  background-color: lightblue;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
`;

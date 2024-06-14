import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
    passwordError: "",
  });

  const navigation = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      usernameError: "",
      passwordError: "",
    });

    if (!formData.username || formData.username === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        usernameError: "아이디를 입력해 주세요",
      }));
      return;
    }

    if (!formData.password || formData.password === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: "비밀번호를 입력해 주세요",
      }));
      return;
    }

    navigation("/");
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <FormTitle>로그인</FormTitle>
        <FormInput>
          <InputLabel>아이디</InputLabel>
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.usernameError && (
            <ErrorText>{errors.usernameError}</ErrorText>
          )}
        </FormInput>
        <FormInput>
          <InputLabel>비밀번호</InputLabel>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.passwordError && (
            <ErrorText>{errors.passwordError}</ErrorText>
          )}
        </FormInput>
        <ButtonContainer>
          <SubmitButton type="submit">로그인</SubmitButton>
        </ButtonContainer>
      </LoginForm>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const FormInput = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  width: 80%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const ErrorText = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 0.9em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 40%;
  height: 40px;
  background-color: #fff;
  color: #1a1a40;
  border-color: #1a1a40;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #1a1a40;
    color: #fff;
  }
`;

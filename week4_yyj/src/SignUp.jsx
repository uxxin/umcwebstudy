import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Reset errors when user starts typing
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        name: "이름을 입력하세요.",
      }));
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        email: "이메일을 입력하세요.",
      }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "올바른 이메일 형식이 아닙니다.",
      }));
      isValid = false;
    }

    // Age validation
    if (!formData.age.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        age: "나이를 입력하세요.",
      }));
      isValid = false;
    } else if (
      isNaN(formData.age) ||
      formData.age <= 0 ||
      formData.age % 1 !== 0
    ) {
      setErrors((prevState) => ({
        ...prevState,
        age: "올바른 나이를 입력하세요.",
      }));
      isValid = false;
    } else if (formData.age < 19) {
      setErrors((prevState) => ({
        ...prevState,
        age: "우리 영화 사이트는 19세 이상만 가입이 가능합니다.",
      }));
      isValid = false;
    }

    // Password validation
    if (!formData.password.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        password: "비밀번호를 입력하세요.",
      }));
      isValid = false;
    } else if (formData.password.length < 4) {
      setErrors((prevState) => ({
        ...prevState,
        password: "비밀번호는 최소 4자리 이상이어야 합니다.",
      }));
      isValid = false;
    } else if (formData.password.length > 12) {
      setErrors((prevState) => ({
        ...prevState,
        password: "비밀번호는 최대 12자리까지 가능합니다.",
      }));
      isValid = false;
    } else if (
      !/[A-Za-z]/.test(formData.password) ||
      !/[0-9]/.test(formData.password) ||
      !/[^A-Za-z0-9]/.test(formData.password)
    ) {
      setErrors((prevState) => ({
        ...prevState,
        password: "영어, 숫자, 특수문자를 모두 조합해야 합니다.",
      }));
      isValid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        confirmPassword: "비밀번호 확인을 입력하세요.",
      }));
      isValid = false;
    } else if (formData.confirmPassword !== formData.password) {
      setErrors((prevState) => ({
        ...prevState,
        confirmPassword: "비밀번호가 일치하지 않습니다.",
      }));
      isValid = false;
    }

    // If form is valid, proceed with submission
    setIsFormValid(isValid);
    if (isValid) {
      console.log(formData);
      // Here you can proceed with form submission
    }
  };

  return (
    <div className="signup-container">
      <h2 style={{ color: "black" }}>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>이름:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {errors.name && <span className="error-message">{errors.name}</span>}
        <div className="form-group">
          <label>이메일:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <span className="error-message">{errors.email}</span>}
        <div className="form-group">
          <label>나이:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        {errors.age && <span className="error-message">{errors.age}</span>}
        <div className="form-group">
          <label>비밀번호:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
        <div className="form-group">
          <label>비밀번호 확인:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}
        <button type="submit" disabled={!isFormValid}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUp;

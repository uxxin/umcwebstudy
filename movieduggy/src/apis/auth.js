import axios from "axios";

export const signUp = async (request) => {
  try {
    const response = await axios.post("http://localhost:8080/auth/signup", {
      name: request.name,
      email: request.email,
      age: request.age,
      username: request.username,
      password: request.password,
      passwordCheck: request.passwordCheck,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
};

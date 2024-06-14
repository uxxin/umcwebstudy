import axios from "axios";

export const getMovie = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=664cb6a408c7321bb643e21b1ca7f837"
    );
    //console.log("axios 불러오기", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

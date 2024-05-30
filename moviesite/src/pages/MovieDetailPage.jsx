import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailComponent from "../components/movieDetailComponent";
import { HashLoader } from "react-spinners";
import styled from "styled-components";
import MovieCreditsComponent from "../components/movieCreditsComponent";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieDetailPage = () => {
  const { id } = useParams();
  const ParseId = parseInt(id);

  const [movieDetailData, setMovieDetailData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetailData = async (id) => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
            params: {
              language: "ko-KR",
            },
          }
        );
        setMovieDetailData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetailData(ParseId);
  }, [id]);

  const [movieCreditsData, setMovieCreditsData] = useState([]);

  useEffect(() => {
    const getMovieCreditsData = async (id) => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
            params: {
              language: "en-US",
            },
          }
        );
        setMovieCreditsData(res.data.cast);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCreditsData(ParseId);
  });

  return loading ? (
    <Container>
      <HashLoader size="120px" color="#0075ff" loading={loading} />
    </Container>
  ) : (
    <>
      <MovieDetailComponent movieDetailData={movieDetailData} />
      <MovieCreditsComponent movieCreditsData={movieCreditsData} />
    </>
  );
};

export default MovieDetailPage;

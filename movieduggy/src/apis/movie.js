export const getMovie = () => {
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=664cb6a408c7321bb643e21b1ca7f837"
  )
    .then((res) => res.json())
    .then((json) => setmovielist(json.results));
};

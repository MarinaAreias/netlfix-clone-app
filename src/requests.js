
const apiKey = "41403b929e27ed6f0faff0373aab98c3";

const requests = {
fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
fetchNetflixOriginals:`/discover/tv?api_key=${apiKey}&with_networks=213`,
fetchTopRated:`/movie/top_rated?api_key=${apiKey}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${apiKey}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${apiKey}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${apiKey}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${apiKey}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${apiKey}&with_genres=99`,
};

export default requests;
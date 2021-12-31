// Typically we would store in {process.env.API_KEY}
const API_KEY = "fd28744838a4c94c479f37e6055eb1fe";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

};


// Axios theke eta pabo     => "https://api.themoviedb.org/3/"
// Requests theke e type er pabo => `/trending/all/week?api_key=${API_KEY}&language=en-US`


// tokon erokom darai => 'https://api.themoviedb.org/3/discover/tv?api_key=fd28744838a4c94c479f37e6055eb1fe&with_networks=213`



export default requests;
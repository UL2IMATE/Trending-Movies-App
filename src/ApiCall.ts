const API_KEY = "e570329f7f8716e6ef181c36394d6914"
const BASE_URL = `https://api.themoviedb.org/3`;

export const getPopularMovies = async () => {
    const POPULAR_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    const response = await fetch(POPULAR_URL);
    const data = await response.json();
    return data.results;
}
export const searchMovie = async (query:string)=>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}
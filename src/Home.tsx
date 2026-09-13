import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovie } from "./ApiCall";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        setLoading(true);
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (e) {
        console.log(e);
        setError("Failed to load movies .....");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = (e.target as HTMLInputElement).value;
    setSearchQuery(query);

    if (query.trim() === "") {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const results = await searchMovie(query);
      setMovies(results);
    } catch (e) {
      console.log(e);
      setError("Failed to search movies .....");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="page-transition w-full justify-center items-center flex p-7">
        <input
          type="text"
          placeholder="Enter movie name here... "
          className="text-amber-300 bg-gray-900 outline-none py-5 px-10 md:px-40 rounded-2xl border-r-sky-600 border-r "
          onChange={handleSearch}
          value={searchQuery}
        />
      </div>
      <div className="flex md:gap-8  gap-4 flex-wrap  justify-center w-full px-7 page-transition">
        {loading && (
          <div className="flex justify-center items-center w-full py-16">
            <div className="w-14 h-14 border-4 border-gray-700 border-t-amber-400 rounded-full animate-spin"></div>
          </div>
        )}
        {error && <p className="text-yellow-300 text-5xl">{error}</p>}
        {movies.map((movie) => {
          if (movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())) {
            return <MovieCard movie={movie} key={movie.id} />;
          }
          return;
        })}
      </div>
    </>
  );
};

export default Home;

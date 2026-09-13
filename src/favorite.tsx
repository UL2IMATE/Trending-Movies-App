import { useMovies } from "./contexts/MovieContext";
import MovieCard from "./MovieCard";
const Favorites = () => {
  const { favorites } = useMovies();
  if (favorites.length > 0) {
    return (
      <>
        <div className="page-transition w-full justify-center items-center flex p-7 flex-wrap">
          <h2 className="text-5xl text-amber-300">Favorite list</h2>
        </div>
        ;
        <div className="flex md:gap-8  gap-4 flex-wrap  justify-center w-full px-7 page-transition">
          {favorites.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="page-transition w-full justify-center items-center flex p-7">
          <h2 className="text-5xl text-amber-300">No favorite movies</h2>
        </div>
      </>
    );
  }
};

export default Favorites;

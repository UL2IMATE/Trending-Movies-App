import { useMovies } from "./contexts/MovieContext";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};

const MovieCard = ({ movie }: { movie: Movie }) => {
  const { handleAddToFavorites, handleRemoveFromFavorites, isFavorite } = useMovies();
  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    if (favorite) {
      handleRemoveFromFavorites(movie);
    } else {
      handleAddToFavorites(movie);
    }
  };

  return (
    <>
      <div className="shadow-lg bg-gray-900 text-white w-70 rounded-lg overflow-hidden mb-5 relative group ">
        <img
          className="w-70 group-hover:scale-105 group-hover:opacity-80 transition-all duration-300 "
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="p-4">
          <h2 className="text-lg font-bold">{movie.title}</h2>
          <p className="text-xl text-teal-500">{movie.release_date}</p>
        </div>

        <div className="absolute top-0 right-0  p-1 opacity-0 group-hover:opacity-100 transition-all   ">
          <button
            onClick={onFavoriteClick}
            className={` ${favorite ? "bg-red-500" : "bg-transparent"}  font-semibold p-1 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 `}
          >
            ❤️
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

import { createContext, useState, useContext, useEffect } from "react";

const movieContext = createContext<any>(undefined);

export const useMovies = () => useContext(movieContext);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const movies = localStorage.getItem("movie-app-favorites") || "[]";
    setFavorites(JSON.parse(movies));
  }, []);

  useEffect(() => {
    localStorage.setItem("movie-app-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const handleRemoveFromFavorites = (movie) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== movie.id));
  };
  const isFavorite = (id) => {
    return favorites.find((fav) => fav.id === id);
  };

  return (
    <movieContext.Provider
      value={{
        favorites,
        handleAddToFavorites,
        handleRemoveFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

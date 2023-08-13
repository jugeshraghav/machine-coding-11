import { useData } from "../Contexts/DataContext";

export const WatchlistBtn = ({ currMovieId }) => {
  const {
    state: { movies, watchlist },
    dispatch,
  } = useData();

  const currentMovie = movies?.find(({ id }) => id === currMovieId);
  const isMovieInWatchList = watchlist?.find(({ id }) => id === currMovieId)
    ? true
    : false;

  //handlers
  const handleAddToWatchlist = (e, movie) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  };

  const handleRemoveFromWatchlist = (e, movieId) => {
    e.stopPropagation();
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movieId });
  };

  return (
    <>
      {isMovieInWatchList ? (
        <button
          className="w-full border bg-slate-500 text-white p-2 rounded-lg"
          onClick={(e) => handleRemoveFromWatchlist(e, currMovieId)}
        >
          Remove From WatchList
        </button>
      ) : (
        <button
          className="w-full border text-slate-500 hover:bg-slate-500 hover:text-white p-2 rounded-lg"
          onClick={(e) => handleAddToWatchlist(e, currentMovie)}
        >
          Add to WatchList
        </button>
      )}
    </>
  );
};

import { MovieCard } from "../Components/MovieCard";
import { useData } from "../Contexts/DataContext";

export const Watchlist = () => {
  const {
    state: { watchlist },
  } = useData();
  return (
    <>
      <div className="flex gap-5 flex-wrap justify-center">
        {watchlist.length > 0 ? (
          watchlist?.map((movie) => (
            <MovieCard key={movie?.id} movieDetail={movie} />
          ))
        ) : (
          <h1 className="text-xl font-bold">No Movies Found...</h1>
        )}
      </div>
    </>
  );
};

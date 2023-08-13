import { MovieCard } from "../Components/MovieCard";
import { useData } from "../Contexts/DataContext";

export const Starred = () => {
  const {
    state: { starred },
  } = useData();
  return (
    <>
      <div className="flex gap-5 flex-wrap justify-center">
        {starred.length > 0 ? (
          starred?.map((movie) => (
            <MovieCard key={movie?.id} movieDetail={movie} />
          ))
        ) : (
          <h1 className="text-xl font-bold">No Movies Found...</h1>
        )}
      </div>
    </>
  );
};

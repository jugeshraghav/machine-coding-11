import { FilterContainer } from "../Components/FilterContainer";
import { MovieCard } from "../Components/MovieCard";
import { useData } from "../Contexts/DataContext";

export const Home = () => {
  const {
    state: { movies },
    filteredMoviesArr,
  } = useData();

  return (
    <>
      <div>
        <FilterContainer />
        <div className="flex gap-5 flex-wrap justify-center">
          {filteredMoviesArr.length > 0 ? (
            filteredMoviesArr?.map((movie) => (
              <MovieCard key={movie?.id} movieDetail={movie} />
            ))
          ) : (
            <h1 className="text-xl font-bold">No Movies Found...</h1>
          )}
        </div>
      </div>
    </>
  );
};

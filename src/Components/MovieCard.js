import { useNavigate } from "react-router-dom";
import { StarBtn } from "./StarBtn";
import { WatchlistBtn } from "./WatchlistBtn";

export const MovieCard = ({ movieDetail }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-64 h-96 shadow-xl rounded-lg relative cursor-pointer"
        onClick={() => navigate(`/movie/${movieDetail?.id}`)}
      >
        <img
          src={movieDetail?.imageURL}
          alt="movie"
          className="w-full h-1/2 rounded-t-xl"
        />
        <div className="h-1/2 p-2 flex flex-col justify-between">
          <h1 className="text-xl font-bold">{movieDetail?.title}</h1>
          <p className="text-sm">{movieDetail?.summary}</p>
          <WatchlistBtn currMovieId={movieDetail?.id} />
        </div>
        <div className="absolute top-0 right-0">
          <StarBtn currMovieId={movieDetail?.id} />
        </div>
      </div>
    </>
  );
};

import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../Contexts/DataContext";
import { WatchlistBtn } from "../Components/WatchlistBtn";
import { StarBtn } from "../Components/StarBtn";
import { AiFillBackward } from "react-icons/ai";

export const MovieDetail = () => {
  const { movieID } = useParams();
  const {
    state: { movies },
  } = useData();
  const currentMovie = movies?.find(({ id }) => id === Number(movieID));
  const navigate = useNavigate();
  return (
    <>
      <div className="p-4">
        <div className="mx-4 text-xxl border rounded-full p-2 hover:bg-slate-600 hover:text-white w-max cursor-pointer">
          <AiFillBackward onClick={() => navigate(-1)} />
        </div>
        <div className="w-full md:h-96 flex flex-col md:flex-row gap-2 border p-4 relative">
          <div className="w-full md:w-1/3 h-1/2 md:h-full">
            <img
              src={currentMovie?.imageURL}
              alt="movie"
              className="w-full h-full"
            />
          </div>
          <div className="w-full md:w-2/3 flex flex-col justify-between">
            <p className="flex gap-2">
              <span className="text-lg font-bold">Title: </span>
              <span className="text-lg font-bold">{currentMovie?.title}</span>
            </p>
            <p className="flex gap-2">
              <span className="text-lg font-bold">Year: </span>
              <span>{currentMovie?.year}</span>
            </p>
            <p className="flex gap-2">
              <span className="text-lg font-bold">Genre: </span>
              <span>{currentMovie?.genre?.join(",")}</span>
            </p>
            <p className="flex gap-2">
              <span className="text-lg font-bold">Rating: </span>
              <span>{currentMovie?.rating}</span>
            </p>
            <p className="flex gap-2">
              <span className="text-lg font-bold">Director: </span>
              <span>{currentMovie?.director}</span>
            </p>
            <p className="flex gap-2">
              <span className="text-lg font-bold">Writer: </span>
              <span>{currentMovie?.writer}</span>
            </p>
            <p className="flex gap-2">
              <span className="text-lg font-bold">Cast: </span>
              <span>{currentMovie?.cast?.join(",")}</span>
            </p>
            <p className="flex gap-2">
              <span className="text-lg font-bold">Summary: </span>
              <span>{currentMovie?.summary}</span>
            </p>
            <WatchlistBtn currMovieId={currentMovie?.id} />
          </div>
          <div className="absolute top-4 left-4">
            <StarBtn currMovieId={currentMovie?.id} />
          </div>
        </div>
      </div>
    </>
  );
};

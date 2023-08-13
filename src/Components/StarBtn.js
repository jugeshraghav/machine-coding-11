import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useData } from "../Contexts/DataContext";
export const StarBtn = ({ currMovieId }) => {
  const {
    state: { movies, starred },
    dispatch,
  } = useData();

  const currentMovie = movies?.find(({ id }) => id === currMovieId);
  const isMovieInStarred = starred?.find(({ id }) => id === currMovieId)
    ? true
    : false;

  //handlers
  const handleAddToStarred = (e, movie) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_STARRED", payload: movie });
  };

  const handleRemoveFromStarred = (e, movieId) => {
    e.stopPropagation();
    dispatch({ type: "REMOVE_FROM_STARRED", payload: movieId });
  };
  return (
    <>
      {isMovieInStarred ? (
        <button
          className=" bg-white text-yellow-500 rounded-full p-2 shadow-xl"
          onClick={(e) => handleRemoveFromStarred(e, currMovieId)}
        >
          <AiFillStar />
        </button>
      ) : (
        <button
          className=" bg-white rounded-full p-2 shadow-xl"
          onClick={(e) => handleAddToStarred(e, currentMovie)}
        >
          <AiOutlineStar />
        </button>
      )}
    </>
  );
};

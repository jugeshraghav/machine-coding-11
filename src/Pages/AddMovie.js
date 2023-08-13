import { AiFillBackward } from "react-icons/ai";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useData } from "../Contexts/DataContext";
import { useNavigate } from "react-router-dom";
export const AddMovie = () => {
  const { dispatch } = useData();

  const initialMovieDetails = {
    title: "",
    year: 0,
    genre: [],
    rating: 0,
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  };
  const [newMovieDetails, setNewMovieDetails] = useState(initialMovieDetails);
  const ratingArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //
  const newMovieDetailsHandler = (e) => {
    e.target.name === "genre" || e.target.name === "cast"
      ? setNewMovieDetails({
          ...newMovieDetails,
          [e.target.name]: e.target.value?.split(","),
        })
      : setNewMovieDetails({
          ...newMovieDetails,
          [e.target.name]: e.target.value,
        });
  };

  const addNewMovieHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_MOVIE",
      payload: { ...newMovieDetails, id: uuid() },
    });
    setNewMovieDetails(initialMovieDetails);
  };

  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="mx-4 text-xxl border rounded-full p-2 hover:bg-slate-600 hover:text-white w-max cursor-pointer">
          <AiFillBackward onClick={() => navigate(-1)} />
        </div>
        <div className=" w-full flex flex-col gap-5 items-center mt-5">
          <h1 className="text-xl font-bold">Add New Movie</h1>
          <form
            className="flex flex-col gap-5 w-full p-10"
            onSubmit={(e) => addNewMovieHandler(e)}
          >
            <div className="flex flex-col w-full">
              <label>Title:</label>
              <input
                className="w-full p-4 border"
                name="title"
                required
                value={newMovieDetails.title}
                onChange={newMovieDetailsHandler}
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Release Year:</label>
              <input
                type="number"
                className="w-full p-4 border"
                name="year"
                required
                value={newMovieDetails?.year}
                onChange={newMovieDetailsHandler}
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label>Genre:</label>
              <input
                type="text"
                className="w-full p-4 border"
                name="genre"
                value={newMovieDetails.genre}
                required
                onChange={newMovieDetailsHandler}
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Rating:</label>
              <select
                className="w-full p-4 border"
                name="rating"
                required
                value={newMovieDetails?.rating}
                onChange={newMovieDetailsHandler}
              >
                <option>Rating</option>
                {ratingArr?.map((curr, index) => (
                  <option key={index} value={curr}>
                    {curr}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label>Director:</label>
              <input
                className="w-full p-4 border"
                name="director"
                required
                value={newMovieDetails?.director}
                onChange={newMovieDetailsHandler}
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label>Writer:</label>
              <input
                className="w-full p-4 border"
                name="writer"
                required
                value={newMovieDetails.writer}
                onChange={newMovieDetailsHandler}
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label>Cast:</label>
              <input
                className="w-full p-4 border"
                name="cast"
                required
                value={newMovieDetails?.cast}
                onChange={newMovieDetailsHandler}
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label>Summary:</label>
              <input
                className="w-full p-4 border"
                name="summary"
                required
                value={newMovieDetails?.summary}
                onChange={newMovieDetailsHandler}
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label>Image Url:</label>
              <input
                className="w-full p-4 border"
                name="imageURL"
                required
                value={newMovieDetails.imageURL}
                onChange={newMovieDetailsHandler}
              ></input>
            </div>
            <button
              type="submit"
              className="bg-slate-600 text-white px-4 py-2 rounded-md cursor-pointer "
            >
              Add Movie
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

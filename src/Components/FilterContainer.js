import { useNavigate } from "react-router-dom";
import { useData } from "../Contexts/DataContext";

export const FilterContainer = () => {
  const { state, uniqueGenres, dispatch } = useData();
  const ratingArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const releaseYearArr = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];
  const navigate = useNavigate();
  //handlers
  const handleRating = (e) => {
    dispatch({ type: "SET_RATING", payload: e.target.value });
  };
  const handleReleaseYear = (e) => {
    dispatch({ type: "SET_RELEASE_YEAR", payload: e.target.value });
  };
  const handleGenre = (e) => {
    dispatch({ type: "SET_GENRE", payload: e.target.value });
  };
  return (
    <>
      <div className="border p-2 w-full flex flex-col md:flex-row gap-2 my-2">
        <div className="w-full md:w-1/3 flex justify-between md:justify-start gap-4">
          <h1 className="text-xl font-bold">Movies</h1>
          <button
            className="bg-slate-500 text-white hover:bg-white hover:text-slate-600 p-1 rounded-md"
            onClick={() => navigate("/addMovie")}
          >
            Add Movie
          </button>
        </div>
        <div className="w-full md:w-2/3 flex justify-between md:justify-around">
          {/* genre */}
          <select
            className="border"
            value={state?.genre}
            onChange={handleGenre}
          >
            <option value={"All Genres"}>All Genres</option>
            {uniqueGenres?.map((curr, index) => (
              <option key={index} value={curr}>
                {curr}
              </option>
            ))}
          </select>
          {/* Release */}
          <select
            className="border"
            value={state?.releaseYear}
            onChange={handleReleaseYear}
          >
            <option value="Release Year">Release Year</option>
            {releaseYearArr?.map((curr, index) => (
              <option key={index} value={curr}>
                {curr}
              </option>
            ))}
          </select>
          {/* Rating */}
          <select
            className="border"
            value={state?.rating}
            onChange={handleRating}
          >
            <option value="Rating">Rating</option>
            {ratingArr?.map((curr, index) => (
              <option key={index} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

import { NavLink } from "react-router-dom";
import { useData } from "../Contexts/DataContext";

export const Navbar = () => {
  const { state, dispatch } = useData();
  //handlers
  const handleSearch = (e) => {
    dispatch({ type: "SET_SEARCH_TEXT", payload: e.target.value });
  };
  return (
    <>
      <div className="bg-slate-500  text-white  p-4 flex justify-between flex-col  gap-2 md:flex-row">
        <div className=" w-full md:w-1/2 flex justify-between">
          <h1 className="text-xl font-bold">IMDB</h1>
          <div className="flex gap-4 md:gap-10">
            <NavLink to="/">Movies</NavLink>
            <NavLink to="/watchlist">WatchList</NavLink>
            <NavLink to="/starred">Starred</NavLink>
          </div>
        </div>
        <div className=" w-full md:w-1/2 flex justify-end">
          <input
            type="text"
            placeholder="search movies by title, cast or director..."
            className="border w-full md:w-2/3 rounded-lg text-sm px-2 py-1 text-slate-600"
            onChange={handleSearch}
            value={state?.searchText}
          ></input>
        </div>
      </div>
    </>
  );
};

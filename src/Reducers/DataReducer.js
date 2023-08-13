import { movies } from "../Data/Data";
localStorage.setItem("movies", JSON.stringify(movies));
const initial_state = {
  movies: JSON.parse(localStorage.getItem("movies")),
  watchlist: JSON.parse(localStorage.getItem("watchlist")) || [],
  starred: JSON.parse(localStorage.getItem("starred")) || [],

  //filter
  searchText: "",
  genre: "",
  releaseYear: 0,
  rating: 0,
};
const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    //filters
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: payload };
    case "SET_GENRE":
      return { ...state, genre: payload };
    case "SET_RELEASE_YEAR":
      return { ...state, releaseYear: payload };
    case "SET_RATING":
      return { ...state, rating: payload };

    //Arr
    case "ADD_TO_WATCHLIST":
      return { ...state, watchlist: [...state?.watchlist, payload] };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: [...state?.watchlist?.filter(({ id }) => id !== payload)],
      };
    case "ADD_TO_STARRED":
      return { ...state, starred: [...state?.starred, payload] };
    case "REMOVE_FROM_STARRED":
      return {
        ...state,
        starred: [...state?.starred?.filter(({ id }) => id !== payload)],
      };

    //Add movie
    case "ADD_MOVIE":
      return { ...state, movies: [...state.movies, payload] };
    default:
      return state;
  }
};

export { initial_state, dataReducer };

import { createContext, useContext, useReducer } from "react";
import { dataReducer, initial_state } from "../Reducers/DataReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initial_state);

  ////
  const uniqueGenres = [];

  state?.movies.forEach((movie) => {
    movie.genre.forEach((genre) => {
      if (!uniqueGenres.some((uniqueGenre) => uniqueGenre === genre)) {
        uniqueGenres.push(genre);
      }
    });
  });

  const searchedMovies =
    state?.searchText.length > 0
      ? state?.movies?.filter(
          ({ title, cast, director }) =>
            title
              .trim()
              .toLowerCase()
              .includes(state?.searchText?.trim()?.toLowerCase()) ||
            director
              .trim()
              .toLowerCase()
              .includes(state?.searchText?.trim()?.toLowerCase()) ||
            cast?.some((name) =>
              name
                .trim()
                .toLowerCase()
                .includes(state?.searchText?.trim()?.toLowerCase())
            )
        )
      : state?.movies;

  const filterOnGenre = state?.genre
    ? searchedMovies?.filter(({ genre }) =>
        genre.find((currGenre) => currGenre === state?.genre)
      )
    : searchedMovies;

  const filterOnRating = state?.rating
    ? filterOnGenre?.filter(({ rating }) => rating === state?.rating)
    : filterOnGenre;
  const filteredMoviesArr = state?.releaseYear
    ? filterOnRating?.filter(({ year }) => year === state?.releaseYear)
    : filterOnRating;

  return (
    <DataContext.Provider
      value={{ state, dispatch, uniqueGenres, filteredMoviesArr }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };

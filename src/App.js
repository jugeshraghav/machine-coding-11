import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { Home } from "./Pages/Home";
import { MovieDetail } from "./Pages/MovieDetail";
import { Watchlist } from "./Pages/Watchlist";
import { Starred } from "./Pages/Starred";
import { AddMovie } from "./Pages/AddMovie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieID" element={<MovieDetail />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/addMovie" element={<AddMovie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

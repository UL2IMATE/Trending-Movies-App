import Home from "./Home";
import Favorites from "./favorite";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <div className="bg-gray-950  min-h-250 justify-center gap-10 items-center flex-col ">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorites />} />
          </Routes>
        </Router>
      </div>
    </MovieProvider>
  );
};

export default App;

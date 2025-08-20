// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      {/* Navigation links (optional) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"> MyApp </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><a className="nav-link" href="/"> Home </a></li>
            <li className="nav-item"><a className="nav-link" href="/about"> About </a></li>
            <li className="nav-item"><a className="nav-link" href="/movies"> Movies </a></li>
            <li className="nav-item"><a className="nav-link" href="/contact"> Contact </a></li>
          </ul>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

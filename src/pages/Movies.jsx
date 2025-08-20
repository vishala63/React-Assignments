import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://fooapi.com/api/movies")
      .then((res) => res.json())
      .then((data) => {
        // Adjust if API wraps results in "movies" or "data"
        if (Array.isArray(data)) {
          setMovies(data);
        } else if (Array.isArray(data.movies)) {
          setMovies(data.movies);
        } else if (Array.isArray(data.data)) {
          setMovies(data.data);
        }
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Movies List</h2>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <div className="card h-100">
              <img
                src={movie.poster || movie.image || "https://via.placeholder.com/300x400"}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                {/* Clicking the movie title navigates to details page */}
                <h5 className="card-title">
                  <Link to={`/movies/${movie.id}`} state={{ movie }}>
                    {movie.title || movie.name}
                  </Link>
                </h5>
                <p className="card-text">
                  {movie.plot?.slice(0, 80) || "Click to see details..."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;

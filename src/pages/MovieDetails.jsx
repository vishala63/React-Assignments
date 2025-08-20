import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

function MovieDetails() {
  const { state } = useLocation();  // Get movie passed from Link
  const { id } = useParams();       // Movie ID from URL
  const movie = state?.movie;       // Movie object

  if (!movie) {
    return (
      <div className="container mt-5">
        <h2>Movie not found</h2>
        <Link to="/movies">⬅ Back to Movies</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>{movie.title || movie.name}</h2>
      <div className="row">
        <div className="col-md-4">
          <img
            src={movie.poster || movie.image || "https://via.placeholder.com/300x400"}
            alt={movie.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <p><strong>Plot:</strong> {movie.plot || "No plot available"}</p>
          <p><strong>Director:</strong> {movie.director || "Unknown"}</p>
          <p><strong>Writer:</strong> {movie.writer || "Unknown"}</p>
          <p><strong>Actors:</strong> {movie.actors || "Not listed"}</p>
          <p><strong>Year:</strong> {movie.year || "N/A"}</p>
          <Link to="/movies" className="btn btn-primary">Back to Movies</Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

// About.jsx
import React from "react";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Us</h2>

      <p className="lead text-center">  
        Here you can explore movies, view details, and enjoy browsing through
        your favorite films.  
      </p>

      <p className="text-center">
        Our goal is to make discovering movies simple and fun.  
        This app is built with React and integrates with a movie API to bring
        you the latest and most popular films.
      </p>

      <div className="text-center mt-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/850/617/non_2x/realistic-cinema-poster-vector.jpg"
          alt="Movies Banner"
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  );
}

export default About;

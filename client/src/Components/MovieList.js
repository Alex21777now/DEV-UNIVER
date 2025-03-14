import React, { useState, useEffect } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(10);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=4e5548c37fdfda0975c70c0688c24955`
      );
      const data = await response.json();
      setMovies(data.results); // Store all 20 movies
    };
    fetchMovies();
  }, []);

  const loadMore = () => {
    setVisibleMovies((prev) => Math.min(prev + 5, movies.length));
  };

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.slice(0, visibleMovies).map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      {visibleMovies < movies.length && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default MovieList;
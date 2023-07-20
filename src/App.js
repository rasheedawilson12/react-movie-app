import "./App.css";
import React, { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  // ------------------------------------------------{API Key Data}
  const apiKey = "1a8f8bf0";
  // const apiKey = "98e3fb1f";

  // ------------------------------------------------{STATE}
  const [movie, setMovie] = useState(null);

  // ---------------------------------------------------{Function that uses async/await to fetch movie data}
  const getMovie = async (searchTerm) => {
    // -----------------------------------------{Go to the Site and Search for Title}
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

    // -------------> Turn info into JSON format
    const data = await response.json();

    // -------------> Taken retrieved data and set it as currentMovie
    setMovie(data);
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;

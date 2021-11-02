import React from "react";
import Movie from "./components/Movie";

function App() {
  const movies = [
    { title: "Steven Yoon1", year: 2001 },
    { title: "Steven Yoon2", year: 2002 },
    { title: "Steven Yoon3", year: 2003 },
    { title: "Steven Yoon4", year: 2004 },
  ];

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });

  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;

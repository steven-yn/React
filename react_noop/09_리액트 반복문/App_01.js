import React from "react";

function App() {
  const movies = [
    { title: "Steven Yoon1", year: 2001 },
    { title: "Steven Yoon2", year: 2002 },
    { title: "Steven Yoon3", year: 2003 },
  ];
  return (
    <div className="App">
      <h1>Movie list</h1>
      <div className="movie">
        <div className="movie-title">{movies[0].title}</div>
        <div className="movie-year">{movies[0].year}</div>
      </div>
      <div className="movie">
        <div className="movie-title">{movies[1].title}</div>
        <div className="movie-year">{movies[1].year}</div>
      </div>
      <div className="movie">
        <div className="movie-title">{movies[2].title}</div>
        <div className="movie-year">{movies[2].year}</div>
      </div>
    </div>
  );
}

export default App;

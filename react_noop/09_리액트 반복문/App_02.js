import React from "react";

function App() {
  const movies = [
    { title: "Steven Yoon1", year: 2001 },
    { title: "Steven Yoon2", year: 2002 },
    { title: "Steven Yoon3", year: 2003 },
    { title: "Steven Yoon4", year: 2004 },
  ];

  const renderMovies = movies.map((movie) => {
    return (
      //JSX 포맷으로 변경
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [movieTitle, setmovieTitle] = useState("");
  const [movieYear, setmovieYear] = useState("");

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
      <form action="">
        <input
          type="text"
          placeholder="영화제목"
          onChange={(e) => setmovieTitle(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="개봉년도"
          onChange={(e) => setmovieYear(e.target.value)}
        />{" "}
        <br />
      </form>
      {renderMovies}
    </div>
  );
}

export default App;

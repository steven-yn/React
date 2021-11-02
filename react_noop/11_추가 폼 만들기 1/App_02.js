import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [movieTitle, setmovieTitle] = useState("");
  const [movieYear, setmovieYear] = useState("");
  const [movies, setMovies] = useState([
    { title: "Steven Yoon1", year: 2001 },
    { title: "Steven Yoon2", year: 2002 },
    { title: "Steven Yoon3", year: 2003 },
    { title: "Steven Yoon4", year: 2004 },
  ]);

  useEffect(() => {
    console.log("render");
  });

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });

  const addMovie = (event) => {
    event.preventDefault();
    setMovies([
      // 추가하려는 정보를 객체에 담아 업데이트
      ...movies,
      {
        title: movieTitle,
        year: movieYear,
      },
    ]);
    setmovieTitle(""); // 리셋
    setmovieYear("");
  };

  return (
    <div className="App">
      <h1>Movie list</h1>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={(e) => setmovieTitle(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          value={movieYear}
          placeholder="개봉년도"
          onChange={(e) => setmovieYear(e.target.value)}
        />{" "}
        <br />
        <button type="submit">영화추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;

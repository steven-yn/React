import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";

function App() {
  const [movies, setMovies] = useState([
    { title: "Steven Yoon1", year: 2001 },
    { title: "Steven Yoon2", year: 2002 },
    { title: "Steven Yoon3", year: 2003 },
    { title: "Steven Yoon4", year: 2004 },
  ]);

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });

  const addMovie = (movie) => {
    // MovieForm 컴포넌트로 props를 통해 보내줌.
    setMovies([
      // 추가하려는 정보를 객체에 담아 업데이트
      ...movies,
      movie,
    ]);
  };

  return (
    <div className="App">
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie} />
      {/* MovieForm 컴포넌트로 addMovie={addMovie} props 보내기 */}
      {renderMovies}
    </div>
  );
}

export default App;

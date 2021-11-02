import React, { useState } from "react";
import InputField from "./InputField";

const MovieForm = ({ addMovie }) => {
  // ({ addMovie }) props 받아오기
  const [movieTitle, setmovieTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [movieYear, setmovieYear] = useState("");
  const [yearError, setYearError] = useState("");

  const resetForm = () => {
    setmovieTitle(""); // 리셋
    setmovieYear("");
  };

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!movieTitle) {
      setTitleError("영화제목을 입력해주세요.");
      validated = false;
    }

    if (!movieYear) {
      setYearError("개봉년도를 입력해주세요");
      validated = false;
    }

    return validated;
  };

  const resetErrors = () => {
    setTitleError("");
    setYearError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      addMovie({
        id: Date.now(),
        title: movieTitle,
        year: movieYear,
      });
      resetErrors();
      resetForm();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <InputField
        type="text"
        value={movieTitle}
        placeholder="영화제목"
        onChange={(e) => setmovieTitle(e.target.value)}
        errorMessage={titleError}
      />
      {/*<input
        type="text"
        value={movieTitle}
        placeholder="영화제목"
        onChange={(e) => setmovieTitle(e.target.value)}
      />{" "}
      <br />
      <div style={{ color: "red" }}>{titleError}</div>*/}
      <InputField
        type="number"
        value={movieYear}
        placeholder="개봉년도"
        onChange={(e) => setmovieYear(e.target.value)}
        errorMessage={yearError}
      />
      {/*<input
        type="number"
        value={movieYear}
        placeholder="개봉년도"
        onChange={(e) => setmovieYear(e.target.value)}
      />{" "}
      <br />
      <div style={{ color: "red" }}>{yearError}</div>*/}
      <button type="submit">영화추가</button>
    </form>
  );
};

export default MovieForm;

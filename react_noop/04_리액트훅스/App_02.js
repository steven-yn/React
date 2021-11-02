import React, { useState } from "react";

function App() {
  const [text, setText] = useState("Steven");

  const onSubmit = () => {
    alert("submitted");
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  //let text = "Steven";

  const updateText = () => {
    // text = 'Yoon';
    setText("Yoon");
    console.log(text);
  };

  return (
    <div className="App">
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>
      <br /> <br />
      <span>{text}</span>
      <button onClick={updateText}>Update</button>
    </div>
  );
}

export default App;

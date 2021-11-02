import React, { useState } from "react";
import Clickcounter from "./components/Clickcounter";

function App() {
  const [buttonName, setButtonName] = useState("클릭");
  const clickButton = () => {
    setButtonName("click");
  };

  return (
    <div className="App">
      <h1>Steven Yoon</h1>
      <Clickcounter click="click1" />
      <Clickcounter click={buttonName} />
      <Clickcounter />
      <button onClick={clickButton}>Click</button>
    </div>
  );
}

export default App;

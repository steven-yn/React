import React from "react";
import Clickcounter from "./components/Clickcounter";

function App() {
  return (
    <div className="App">
      <h1>Steven Yoon</h1>
      <Clickcounter click="click1" />
      <Clickcounter />
      <Clickcounter />
    </div>
  );
}

export default App;

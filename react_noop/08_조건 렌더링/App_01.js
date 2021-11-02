import React, { useState, useEffect } from "react";
function App() {
  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);

  useEffect(() => {
    console.log(condition);
  }, [condition]);

  return (
    <div className="App">
      <h1> Steven Yoon </h1>
      {condition ? <div>True</div> : <div>False</div>}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;

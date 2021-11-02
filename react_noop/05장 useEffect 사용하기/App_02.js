import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [steven, setSteven] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Steven Yoon</h1>
      <button onClick={increment}>Click</button>
      <button onClick={() => setSteven(steven + 1)}>Click1</button>
    </div>
  );
}

export default App;

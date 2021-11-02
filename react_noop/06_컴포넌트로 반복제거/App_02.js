import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div className="App">
      <h1>Steven Yoon</h1>
      <button onClick={increment}>Click {count}</button>
      <button onClick={increment1}>Click {count1}</button>
      <button onClick={increment2}>Click {count2}</button>
    </div>
  );
}

export default App;

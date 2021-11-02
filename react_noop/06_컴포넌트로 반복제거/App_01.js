import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Steven Yoon</h1>
      <button onClick={increment}>Click {count}</button>
    </div>
  );
}

export default App;

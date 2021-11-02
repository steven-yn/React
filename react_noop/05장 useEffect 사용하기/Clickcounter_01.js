import React, { useState } from "react";

const Clickcounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 2);
  };

  return <button onClick={increment}>Click {count}</button>;
};
export default Clickcounter;

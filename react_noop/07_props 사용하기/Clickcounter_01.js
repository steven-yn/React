import React, { useState } from "react";

const Clickcounter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 2);
  };

  return (
    <button onClick={increment}>
      {props.click} {count}
    </button>
  );
};
export default Clickcounter;

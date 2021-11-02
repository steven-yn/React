import React, { useState } from "react";

const Clickcounter = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 2);
  };

  const clickKey = props.click || "Click";

  return (
    <button onClick={increment}>
      {clickKey} {count}
    </button>
  );
};
export default Clickcounter;

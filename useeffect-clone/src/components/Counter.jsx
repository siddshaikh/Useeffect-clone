import React, { useState } from "react";
import useCustomeffect from "../hooks/useCustomeffect";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useCustomeffect(() => {
    console.log("component render", count);
    // return () => {
    //   console.log("cleanup");
    // };
  }, [count]);
  //   console.log("Rendered");
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <br />
    </div>
  );
};

export default Counter;

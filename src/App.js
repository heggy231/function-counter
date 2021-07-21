import React, { useState } from "react";

const App = (props) => {
  console.log("render()");

  const [count, setCount] = useState(0);

  const incrementCount = () => {setCount(count + 1)};

  return (
    <>
      <h1>Counter Functional Component: {count}</h1>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default App;

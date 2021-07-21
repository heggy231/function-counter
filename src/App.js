import React, {useState} from "react";

function App () {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default App;

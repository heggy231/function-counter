import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postApiUrl = "https://jsonplaceholder.typicode.com/posts";

    const postsData = async () => {

      const data = await fetch(postApiUrl)
        .then(resp => resp.json())
        .then(jsonDataArr => {
          console.log('jsonDataArr:', jsonDataArr);
          return setPosts(jsonDataArr);
        })
        
      return data;
    };
    postsData();
  });

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default App;

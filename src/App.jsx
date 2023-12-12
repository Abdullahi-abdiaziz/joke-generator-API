import { useState } from "react";

import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  const API_KEY = "Q4HafUiEkvLOL6LblG9c4g==R4JTF2ZawN70SAap";
  const URL = `https://api.api-ninjas.com/v1/jokes`;

  const fetchJoke = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "X-Api-Key": API_KEY,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setJoke(result[0].joke);
    } catch (error) {
      console.error("Error: ", error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Random Joke Generator</h1>
      <div className="joke">
        {joke ? (
          <p>{joke}</p>
        ) : (
          <p>Why did the sheep go to the doctor? He had a baah-baah throat.</p>
        )}
        <button onClick={fetchJoke}>New Joke!</button>
      </div>
    </div>
  );
}

export default App;

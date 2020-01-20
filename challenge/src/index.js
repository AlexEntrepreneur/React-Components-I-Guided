import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// Alison
function App() {
  // 1- Create a slice of state called `direction` that tracks which direction button is clicked
  // 2- Set its initial value to '-'
const[direction, setDirection]= React.useState("-");
  return (
    <div className="buttons-container">
      {/* 3- Render your new slice of state in a h1 element */}
      <h1>{direction}</h1>
      {/* 4- Update the state with the direction (in words) when each button is clicked */}
      <button onClick={() => setDirection("left")} >&#11013;</button>
      <button onClick={() => setDirection("up")} >&#11014;</button>
      <button onClick={() => setDirection("down")} >&#11015;</button>
      <button onClick={() => setDirection("right")} >&#10145;</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
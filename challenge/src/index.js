import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function App() {
  // 1- Create a slice of state called `direction` that tracks which direction button is clicked
  // 2- Set its initial value to '-'
  return (
    <div className="buttons-container">
      {/* 3- Render your new slice of state in a h1 element */}
      {/* 4- Update the state with the direction (in words) when each button is clicked */}
      <button>&#11013;</button>
      <button>&#11014;</button>
      <button>&#11015;</button>
      <button>&#10145;</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
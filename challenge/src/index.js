// don't forget to destructure useState
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function App() {
  // Declare a new state variable

  // This is code to change the color on the "picker-choice span to match the color of the button choosen"

  // if (color === "Green") {
  //   styles.color = "#57e278";
  // } else if (color === "Pink") {
  //   styles.color = "#e257c1";
  // } else if (color === "Blue") {
  //   styles.color = "#2e6cd3";
  // } else {
  //   styles.color = "#E62739";
  // }

  return (
    <div className="counter">
      <p>
        {/* Using template literal to add space after color 👇 */}
        {`Color: `}
        {/* <span className="picker-choice" style={color:}> */}
        <span className="picker-choice">
          red
          {/* 👈This color is hard coded in. Replace it with our state variable */}
        </span>
      </p>
      {/* Add click listeners to each button to update our color on click. */}
      <div className="button_container">
        <button className="color_button">
          <span role="img" aria-label="blue heart">
            💙
          </span>
        </button>
        <button className="color_button">
          <span role="img" aria-label="green heart">
            💚
          </span>
        </button>
        <button className="color_button">
          <span role="img" aria-label="pink heart">
            💗
          </span>
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

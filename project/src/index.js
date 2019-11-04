import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function App() {
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <p className="click_desc">
        You clicked <span>0</span> times
      </p>
      <div className="button_container">
        <button>Add 1</button>
        <button>multiply by 5</button>
        <button>reset</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
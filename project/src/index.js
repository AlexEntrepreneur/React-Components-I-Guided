import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function TestComponent() {
  return (
    <div className="box">Hello React!</div>
    );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<TestComponent />, rootElement);
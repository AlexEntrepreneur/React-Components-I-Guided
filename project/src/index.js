import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function TestComponent() {
  const [someState, setSomeState] = React.useState('Initial');
  return (
    <div className="buttons-container">
      <h1>{someState}</h1>
      <button onClick={() => console.log('Clicked')}>Click Me!</button>
      <button onClick={() => setSomeState('Clicked!')}>Update State!</button>
    </div>
  );
}

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
  <div className="counter-container">
    <h1 className="counter-heading">{counter}</h1>
    <div className="buttons-container">
      <button onClick={() => setCounter(counter + 1)}>Add 1</button>
      <button onClick={() => setCounter(counter * 5)}>Multiply by 5</button>
      <button onClick={() => setCounter(counter * 10)}>Multiply by 10</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
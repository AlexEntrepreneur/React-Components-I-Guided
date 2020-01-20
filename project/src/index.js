import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function TestComponent() {
  const [someState, setSomeState] = React.useState('Initial!');

  // setTimeout(() => {
  //   setSomeState('State has changed!');
  // }, 2000);

  return (
  <div className="buttons-container">
    <h1>{someState}</h1>
    <button onClick={(event) => console.log('Clicked!', event)}>Click Me!</button>
    <button onClick={() => setSomeState('Clicked!')}>Update State!</button>
  </div>

  // Zakaria
  // <div className="buttons-container">
  //   <h1>{someState}</h1>
  //   <button onWheel={(event) => console.log(`wheelin'`)}>X</button>
  // </div>
    );
}

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-heading">{counter}</h1>
      <div className="buttons-container">
        <button onClick={() => setCounter(counter + 1)}>Add 1</button>
        <button onClick={() => setCounter(counter * 5)}>Multiply By 5</button>
        <button onClick={() => setCounter(counter * 10)}>Multiply By 10</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  );
}

// Amin
function Hello() {
  const [line1, setLine1] = React.useState('Hello, Can you hear me?');
  
  setTimeout(() => {
      setLine1('Hello, from the othersiiiide!');
  }, 2000);
  
  return (
  <div className="box">{line1}</div>
  );
}

// Dimos
function WeAreBack(){
  return (
    <div className="box">We Are Back!</div>
  );
}

// Austin
function Student() {
  return (
    <div className="container" style={{border: "1px solid white"}}>
      <h1>Name: Austin</h1>
      <h2>Age: 99</h2>
      <h2>Favorite Language: JavaScript</h2>
      <p>Introduction: Hi, my name is Austin and I like JavaScript</p>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
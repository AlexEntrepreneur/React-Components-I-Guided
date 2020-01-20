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
ReactDOM.render(<TestComponent />, rootElement);
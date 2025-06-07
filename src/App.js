import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

// Greeting component with props
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

// Counter component with state and event handling
function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button className="btn increase" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button className="btn decrease" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <button className="btn reset" onClick={() => setCount((count = 0))}>
        Reset
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div style={{ padding: 20 }}>
          <Greeting name="Ezekiel" />
          <Counter />
        </div>
      </header>
    </div>
  );
}
export default App;

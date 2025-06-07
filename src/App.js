import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

// Greeting component with props
function Greeting(props) {
  // Renders a greeting message using the 'name' prop
  return <h2>Hello, {props.name}!</h2>;
}

// ToggleMessage component demonstrates conditional rendering and state usage
function ToggleMessage() {
  // Declare a state variable 'show' to track message visibility, default is true
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* Button toggles the 'show' state between true and false */}
      <button className="btn" onClick={() => setShow(!show)}>
        Toggle
      </button>
      {/* Conditionally render the message only if 'show' is true */}
      {show && <p>This is a conditional message.</p>}
    </div>
  );
}

// FruitList component demonstrates rendering a list from an array
function FruitList() {
  // Define an array of fruit names
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    // Render an unordered list of fruits
    <ul>
      {/* Map over the fruits array and render each fruit as a list item */}
      {fruits.map((fruit, index) => (
        // Use the index as a key for each list item (acceptable for static lists)
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

// Logger component demonstrates useEffect for side effects
function Logger() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render when 'count' changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Click me</button>;
}

// Child component receives a message prop from Parent
function Child({ message }) {
  return <p>Child says: {message}</p>;
}

// Parent component passes a message prop to Child
function Parent() {
  return <Child message="Hello from Parent!" />;
}

// Counter component with state and event handling
function Counter() {
  // Declare state variable 'count' and its setter
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Count: {count}</p>
      {/* Increase button increments count */}
      <button className="btn increase" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      {/* Decrease button decrements count */}
      <button className="btn decrease" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      {/* Reset button sets count back to 0 */}
      <button className="btn reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

// Main App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Display React logo */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* Link to React documentation */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ padding: 20 }}>
          {/* Render Greeting and Counter components */}
          <Greeting name="Ezekiel" />
          <Counter />
          <ToggleMessage />
          <FruitList />
          <Logger />
          <Parent />
        </div>
      </header>
    </div>
  );
}

export default App;

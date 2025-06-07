import { useState } from "react";
import "./App.css";

/**
 * Click Counter Component
 *
 * This component displays a counter with buttons to increment and decrement its value.
 * It includes edge case handling to prevent negative numbers and shows messages at thresholds.
 *
 * @returns {JSX.Element} The counter interface with buttons and display
 */
function App() {
  // State for the counter value
  const [count, setCount] = useState(0);

  // Threshold for special messages
  const UPPER_THRESHOLD = 10;
  const LOWER_THRESHOLD = 0;

  /**
   * Increments the counter by 1
   */
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  /**
   * Decrements the counter by 1, but not below 0
   */
  const decrement = () => {
    setCount((prevCount) =>
      prevCount > LOWER_THRESHOLD ? prevCount - 1 : prevCount
    );
  };

  /**
   * Resets the counter to 0
   */
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <h1>Click Counter</h1>

      <div className="counter-display">
        <p className="count-value">{count}</p>

        {/* Status messages based on count */}
        {count === UPPER_THRESHOLD && (
          <p className="status-message">You've reached the limit!</p>
        )}
        {count === LOWER_THRESHOLD && (
          <p className="status-message">Minimum count reached</p>
        )}
      </div>

      <div className="button-group">
        <button
          onClick={increment}
          className="btn increment"
          aria-label="Increase counter"
          disabled={count === UPPER_THRESHOLD}
        >
          Increase
        </button>

        <button
          onClick={decrement}
          className="btn decrement"
          aria-label="Decrease counter"
          disabled={count === LOWER_THRESHOLD}
        >
          Decrease
        </button>

        <button
          onClick={reset}
          className="btn reset"
          aria-label="Reset counter"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

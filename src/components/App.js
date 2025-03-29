
import React, {useState}  from "react";
import './../styles/App.css';

const App = () => {
  // Initialize state with useState hook
  const [count, setCount] = useState(0);

  // Function to handle button click and increment counter
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App

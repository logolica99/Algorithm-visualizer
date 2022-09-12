import { useState } from "react";
import "./App.css";
import QuickSort from "./Components/QuickSort";

function App() {
  const [length, setLength] = useState(4);
  const minLength = 4;
  return (
    <div className="App">
      <input
        type="range"
        min="4"
        max="50"
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />
      <QuickSort length={length} />
    </div>
  );
}

export default App;

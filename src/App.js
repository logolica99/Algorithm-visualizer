import { useState } from "react";
import "./App.css";
import QuickSort from "./Components/QuickSort";
import Slider from "@mui/material/Slider";

function App() {
  const [length, setLength] = useState(15);

  return (
    <div className="App">
      <div className="inputRange">
        <Slider
          value={length}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={5}
          max={50}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </div>

      <QuickSort length={length} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./styles/styles.scss";
import QuickSort from "./Components/QuickSort";
import Slider from "@mui/material/Slider";

function App() {
  const [length, setLength] = useState(15);

  return (
    <div className="App">
      <div className="inputRange">
        <h3>Change Array Size</h3>
        <Slider
          value={length}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={5}
          max={40}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </div>

      <QuickSort length={length} />

      <p className="footer">
        Made with 💖 by <a href="https://github.com/logolica99">logolic99</a>
      </p>
    </div>
  );
}

export default App;

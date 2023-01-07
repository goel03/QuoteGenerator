import { useState } from "react";
import "./styles.css";
var colors = ["red", "yellow", "blue", "green", "purple", "pink"];

function App() {
  const [val, setValue] = useState(null);
  const getrandom = async () => {
    await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((value) => setValue(value.slip.advice));
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
  };

  const onClickHandler = () => {
    getrandom();
  };
  return (
    <div className="center">
      <div className="border">
        {val} <br />
        <div className="btn">
          <button onClick={onClickHandler}> Click </button>
        </div>
      </div>
    </div>
  );
}

export default App;

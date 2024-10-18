import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  let updateplue = () => {
    count++;
    setCount(count);
  };

  let updateminus = () => {
    count--;
    setCount(count);
  };

  let showme = (e) => {
    let abc = document.getElementById("t1").value;
    alert(abc);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React App - counter ++</p>

        <div className="wrapper">
          <div className="counter">
            <button className="bm" onClick={updateminus}>
              -
            </button>
            <p className="pp"> {count}</p>
            <button className="bm" onClick={updateplue}>
              +
            </button>
          </div>
        </div>
        <br />
        <input type="text" id="t1" placeholder="Hello" />
        <br />
        <button id="b1" onClick={showme}>
          Click
        </button>
      </header>
    </div>
  );
}

export default App;

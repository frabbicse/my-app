import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Mulitply } from "./features/calculator/Multiply";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />

        <div>
          <Mulitply />
        </div>
      </header>
    </div>
  );
}

export default App;

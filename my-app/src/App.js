import React from "react";
import Nav from "./components/Nav";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="bg-[#121213] h-[100vh]">
      <Nav />
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;

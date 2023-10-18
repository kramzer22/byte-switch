import { useState } from "react";
import "./App.css";

import Board from "../components/Board";

function App() {
  const [board, setBoard] = useState([
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  return <Board boardSize={board} />;
}

export default App;

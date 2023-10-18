import { useState } from "react";
import "./App.css";

import Board from "../components/Board";

function App() {
  const [board, setBoard] = useState([
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 9, 0, 0],
  ]);
  const [playerPosition, setPlayerPosition] = useState("0:2");

  const appKeyEvent = (e) => {
    const pressedKey = e.key;
    console.log(pressedKey);
    let rowIndex = parseInt(playerPosition.split(":")[0]);
    let columnIndex = parseInt(playerPosition.split(":")[1]);
    if (
      (pressedKey === "a" || pressedKey === "ArrowLeft") &&
      columnIndex != 0
    ) {
      const newRowIndex = rowIndex;
      const newColumnIndex = columnIndex - 1;
      setPlayerPosition(newRowIndex + ":" + newColumnIndex);

      const newBoard = board;
      newBoard[rowIndex][columnIndex] = 0;
      newBoard[newRowIndex][newColumnIndex] = 1;
      setBoard(newBoard);
    } else if (
      (pressedKey === "w" || pressedKey == "ArrowUp") &&
      rowIndex != 0
    ) {
      const newRowIndex = rowIndex - 1;
      const newColumnIndex = columnIndex;
      setPlayerPosition(newRowIndex + ":" + newColumnIndex);

      const newBoard = board;
      newBoard[rowIndex][columnIndex] = 0;
      newBoard[newRowIndex][newColumnIndex] = 1;
      setBoard(newBoard);
    } else if (
      (pressedKey === "s" || pressedKey === "ArrowDown") &&
      rowIndex != board.length - 1
    ) {
      const newRowIndex = rowIndex + 1;
      const newColumnIndex = columnIndex;
      setPlayerPosition(newRowIndex + ":" + newColumnIndex);

      const newBoard = board;
      newBoard[rowIndex][columnIndex] = 0;
      newBoard[newRowIndex][newColumnIndex] = 1;
      setBoard(newBoard);
    } else if (
      (pressedKey === "d" || pressedKey === "ArrowRight") &&
      columnIndex != board[0].length - 1
    ) {
      const newRowIndex = rowIndex;
      const newColumnIndex = columnIndex + 1;
      setPlayerPosition(newRowIndex + ":" + newColumnIndex);

      const newBoard = board;
      newBoard[rowIndex][columnIndex] = 0;
      newBoard[newRowIndex][newColumnIndex] = 1;
      setBoard(newBoard);
    }
  };

  return (
    <div className="app-container" tabIndex="0" onKeyUp={appKeyEvent}>
      <Board boardSize={board} />
    </div>
  );
}

export default App;

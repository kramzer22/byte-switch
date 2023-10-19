import "./board-style.css";

// Board component
function Board({ boardSize }) {
  return (
    <div className="board-container">
      {boardSize.map((row, rowIndex) => (
        <Row key={rowIndex} row={row} />
      ))}
    </div>
  );
}

// Row component
function Row({ row }) {
  return (
    <div className="board-row">
      {row.map((cell, cellIndex) => (
        <Cell key={cellIndex} cell={cell} />
      ))}
    </div>
  );
}

// Cell Component
function Cell({ cell }) {
  if (cell === 0) {
    return <div className="board-cell zero"></div>;
  } else if (cell === 1) {
    return <div className="board-cell one"></div>;
  } else if (cell === 2) {
    return <div className="board-cell two"></div>;
  } else if (cell === 3) {
    return <div className="board-cell three"></div>;
  } else if (cell === 9) {
    return <div className="board-cell nine"></div>;
  } else if (cell === "Z") {
    return <div className="board-cell Z"></div>;
  }
}

export default Board;

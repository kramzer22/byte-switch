import "./board-style.css";

function Board({ boardSize }) {
  return (
    <div className="board-container">
      {boardSize.map((row, rowIndex) => (
        <Row key={rowIndex} row={row} />
      ))}
    </div>
  );
}

function Row({ row }) {
  return (
    <div className="board-row">
      {row.map((cell, cellIndex) => (
        <Cell key={cellIndex} cell={cell} />
      ))}
    </div>
  );
}

function Cell({ cell }) {
  if (cell === 0) {
    return <div className="board-cell zero"></div>;
  } else if (cell === 1) {
    return <div className="board-cell one"></div>;
  } else if (cell === 9) {
    return <div className="board-cell nine"></div>;
  }
}

export default Board;

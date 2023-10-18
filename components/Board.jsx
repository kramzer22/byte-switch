function Board({ boardSize }) {
  return (
    <div className="board-container">
      {boardSize.map((row, rowIndex) => (
        <Row key={rowIndex} cellRow={row} />
      ))}
    </div>
  );
}

function Row({ cellRow }) {
  return (
    <div className="board-row">
      {cellRow.map((cell, cellIndex) => (
        <Cell key={cellIndex} />
      ))}
    </div>
  );
}

function Cell() {
  return <div className="board-cell"></div>;
}

export default Board;

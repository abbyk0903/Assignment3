import Cell from "./Cell";

export default function Board({ board, onCellClick, winningLine }) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe Board">
      {board.map((value, i) => (
        <Cell
          key={i}
          value={value}
          onClick={() => onCellClick(i)}
          isWinning={winningLine.includes(i)}
        />
      ))}
    </div>
  );
}

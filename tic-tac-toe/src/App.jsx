import { useMemo, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { calculateWinner } from "./game/calculateWinner";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line } = useMemo(() => calculateWinner(board), [board]);

  function handleCellClick(index) {
    // לוגיקה מלאה תבוא בקומיט הבא
    if (board[index]) return;
    const next = board.slice();
    next[index] = xIsNext ? "X" : "O";
    setBoard(next);
    setXIsNext((p) => !p);
  }

  return (
    <div className="page">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="status">{`Next turn: ${xIsNext ? "X" : "O"}`}</div>

      <Board board={board} onCellClick={handleCellClick} winningLine={line} />

      <button className="restart">Restart / New Game</button>
    </div>
  );
}

import "./App.css";
import Board from "./components/Board";

export default function App() {
  const board = Array(9).fill(null);

  return (
    <div className="page">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="status">Next turn: X</div>

      <Board board={board} onCellClick={() => {}} winningLine={[]} />

      <button className="restart">Restart / New Game</button>
    </div>
  );
}
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="status">Next turn: X</div>

      <div className="board">
        {Array.from({ length: 9 }).map((_, i) => (
          <button key={i} className="cell" />
        ))}
      </div>

      <button className="restart">Restart / New Game</button>
    </div>
  );
}

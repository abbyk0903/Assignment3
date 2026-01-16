export default function Cell({ value, onClick, isWinning }) {
  return (
    <button className={`cell ${isWinning ? "win" : ""}`} onClick={onClick}>
      {value}
    </button>
  );
}

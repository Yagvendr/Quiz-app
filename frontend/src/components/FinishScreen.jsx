export default function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  return (
    <div className="finish fade">
      <p>
        Score: {points}/{maxPossiblePoints}
      </p>
      <p>Highscore: {highscore}</p>
      <button onClick={() => dispatch({ type: "restart" })}>Restart</button>
    </div>
  );
}

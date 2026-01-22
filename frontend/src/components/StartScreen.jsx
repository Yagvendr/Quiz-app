export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <p>{numQuestions} questions</p>
      <button onClick={() => dispatch({ type: "start" })}>Start</button>
    </div>
  );
}

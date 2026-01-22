export default function Progress({ index, numQuestions, points, maxPossiblePoints }) {
  return (
    <p>
      Question {index + 1}/{numQuestions} | {points}/{maxPossiblePoints}
    </p>
  );
}

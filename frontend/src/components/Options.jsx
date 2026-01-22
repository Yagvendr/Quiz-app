export default function Options({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((option, index) => {
        let className = "";

        if (answer !== null) {
          if (index === question.correctOption) className = "correct";
          if (index === answer && answer !== question.correctOption)
            className = "wrong";
        }

        return (
          <button
            key={option}
            className={className}
            disabled={answer !== null}
            onClick={() =>
              dispatch({ type: "newAnswer", payload: index })
            }
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}


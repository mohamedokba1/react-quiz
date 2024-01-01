function FinishScreen({ userPoints, maxPoints, highscore, dispatch }) {
  const percentage = (userPoints / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage < 80 && percentage >= 50) emoji = "😉";
  if (percentage > 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div>
      <p className="result">
        {emoji} You scored {userPoints} points out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">
        Highscore: <strong>{highscore} </strong> points
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;

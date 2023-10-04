function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 50 && percentage < 80) emoji = "🤔";
  if (percentage === 0) emoji = "👎";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> Você fez <strong>{points}</strong> de{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%) pontos possíveis
      </p>
      <p className="highscore">(Recorde: {highscore} pontos)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reiniciar
      </button>
    </>
  );
}

export default FinishScreen;

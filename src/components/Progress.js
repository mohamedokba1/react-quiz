function Progress({ index, numberOfQuestions, maxPoints, points, asnwer }) {
  return (
    <header className="progress">
      <progress
        max={numberOfQuestions}
        value={index + Number(asnwer !== null)}
      />
      <p>
        Questions <strong>{index + 1}</strong> / {numberOfQuestions}
      </p>
      <p>
        Points <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;

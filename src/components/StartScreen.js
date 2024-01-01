function StartScreen({ numOfQuestions, onStartQuiz }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numOfQuestions} Questions to check your React mastery</h3>
      <button className="btn" onClick={() => onStartQuiz({ type: "start" })}>
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;

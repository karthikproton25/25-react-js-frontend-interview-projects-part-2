function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      {!showResult ? (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((optionItem) => (
              <button
                key={optionItem}
                className={`option ${
                  selectedOptions[currentQuestion] === optionItem
                    ? "selected"
                    : ""
                }`}
              >
                {optionItem}
              </button>
            ))}
          </div>
          <div className="button-container">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="prev-btn"
            >
              Previous
            </button>
            <button onClick={handleNextQuestion} className="next-btn">
              {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Quiz Completed</h3>
          <p>Your Score: {score}</p>
          <button className="restart-button">Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;

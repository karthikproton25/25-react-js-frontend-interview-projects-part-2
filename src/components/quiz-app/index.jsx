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
    </div>
  );
}

export default Quiz;

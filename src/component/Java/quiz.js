function javaq() {
    // Properties
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
    const questions = [
      {
        text: " Which statement is true about Java?",
        options: [
          { id: 0, text: "Java is a sequence-dependent programming language", isCorrect: false },
          { id: 1, text: "Java is a code dependent programming language", isCorrect: false },
          { id: 2, text: "Java is a platform-dependent programming language", isCorrect: false },
          { id: 3, text: "Java is a platform-independent programming language", isCorrect: true },
        ],
      },
      {
        text: "  Which component is used to compile, debug and execute the java programs?",
        options: [
          { id: 0, text: "JRE", isCorrect: false },
          { id: 1, text: "JIT", isCorrect: false },
          { id: 2, text: "JDK", isCorrect: true },
          { id: 3, text: "JVM", isCorrect: false },
        ],
      },
      {
        text: "What is the extension of java code files?",
        options: [
          { id: 0, text: ".js", isCorrect: false },
          { id: 1, text: " .txt", isCorrect: false },
          { id: 2, text: ".class", isCorrect: false },
          { id: 3, text: ".java", isCorrect: true },
        ],
      },
      {
        text: "Which environment variable is used to set the java path?",
        options: [
          { id: 0, text: "MAVEN_Path", isCorrect: false },
          { id: 1, text: "JavaPATH", isCorrect: false },
          { id: 2, text: "JAVA", isCorrect: false },
          { id: 3, text: "JAVA_HOME", isCorrect: true },
        ],
      },
      {
        text: "Which of the following is not an OOPS concept in Java?",
        options: [
          { id: 0, text: "Polymorphism", isCorrect: false },
          { id: 1, text: "Inheritance", isCorrect: false },
          { id: 2, text: "Compilation", isCorrect: true },
          { id: 3, text: "Encapsulation", isCorrect: false },
        ],
      },
      {
          text: "Which of the following is a type of polymorphism in Java Programming?",
          options: [
            { id: 0, text: "Multiple polymorphism", isCorrect: false },
            { id: 1, text: "Compile time polymorphism", isCorrect: true },
            { id: 2, text: "Multilevel polymorphism", isCorrect: false },
            { id: 3, text: "Execution time polymorphism", isCorrect: false },
          ],
        },
        {
          text: "What is Truncation in Java?",
          options: [
            { id: 0, text: "Floating-point value assigned to a Floating type", isCorrect: false },
            { id: 1, text: "Floating-point value assigned to an integer type", isCorrect: true },
            { id: 2, text: "Integer value assigned to floating type", isCorrect: false },
            { id: 3, text: "Integer value assigned to floating type", isCorrect: false },
          ],
        },
        {
          text: "What is the extension of compiled java classes?",
          options: [
            { id: 0, text: ".txt", isCorrect: false },
            { id: 1, text: ".js", isCorrect: false },
            { id: 2, text: ".class", isCorrect: true },
            { id: 3, text: ".java", isCorrect: false },
          ],
        },
        {
          text: "Which of these are selection statements in Java?",
          options: [
            { id: 0, text: "break", isCorrect: false },
            { id: 1, text: "continue", isCorrect: false },
            { id: 2, text: "for()", isCorrect: false },
            { id: 3, text: " if()", isCorrect: true },
          ],
        },
        {
          text: "Which class provides system independent server side implementation?",
          options: [
            { id: 0, text: "Server", isCorrect: false },
            { id: 1, text: "ServerReader", isCorrect: false },
            { id: 2, text: "Socket", isCorrect: false },
            { id: 3, text: "ServerSocket", isCorrect: true},
          ],
        },
    ];
  
    // Helper Functions
  
    /* A possible answer was clicked */
    const optionClicked = (isCorrect) => {
      // Increment the score
      if (isCorrect) {
        setScore(score + 1);
      }
  
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    };
  
    /* Resets the game back to default */
    const restartGame = () => {
      setScore(0);
      setCurrentQuestion(0);
      setShowResults(false);
    };
  
    return (
      <div className={styles.quiz}>
        <nav className={styles.navbar}>
                <Link to = "/">
                    <button type='button' className={styles.white_btn}>
                         HOME
                    </button>
                </Link>
                
                <button className={styles.white_btn} onClick={handleLogout}>
                     LOGOUT
                </button>
                </nav>
        {/* 1. Header  */}
        <h1>JAVA QUIZ</h1>
  
        {/* 2. Current Score  */}
        <h2>Score: {score}</h2>
  
        {/* 3. Show results or show the question game  */}
        {showResults ? (
          /* 4. Final Results */
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()}>Retake Quiz</button>
          </div>
        ) : (
          /* 5. Question Card  */
          <div className="question-card">
            {/* Current Question  */}
            <h2>
              Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>
  
            {/* List of possible answers  */}
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  export default javaq;
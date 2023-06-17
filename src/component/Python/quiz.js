import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link} from 'react-router-dom';




function Pythonq() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: " Which type of Programming does Python support?",
      options: [
        { id: 0, text: "object-oriented programming", isCorrect: false },
        { id: 1, text: "structured programming", isCorrect: false },
        { id: 2, text: "functional programming", isCorrect: false },
        { id: 3, text: " all of the mentioned", isCorrect: true },
      ],
    },
    {
      text: " Is Python code compiled or interpreted?",
      options: [
        { id: 0, text: " Python code is both compiled and interpreted", isCorrect: true },
        { id: 1, text: "Python code is neither compiled nor interpreted", isCorrect: false },
        { id: 2, text: "Python code is only compiled", isCorrect: false },
        { id: 3, text: " Python code is only interpreted", isCorrect: false },
      ],
    },
    {
      text: " Which of the following functions can help us to find the version of python that we are currently working on?",
      options: [
        { id: 0, text: "sys.version(1)", isCorrect: false },
        { id: 1, text: "sys.version(0)", isCorrect: false },
        { id: 2, text: "sys.version()", isCorrect: false },
        { id: 3, text: "sys.version", isCorrect: true },
      ],
    },
    {
      text: "What is the order of precedence in python?",
      options: [
        { id: 0, text: "Exponential, Parentheses, Multiplication, Division, Addition, Subtraction", isCorrect: false },
        { id: 1, text: "Exponential, Parentheses, Division, Multiplication, Addition, Subtraction", isCorrect: false },
        { id: 2, text: "Parentheses, Exponential, Multiplication, Division, Subtraction, Addition", isCorrect: false },
        { id: 3, text: " Parentheses, Exponential, Multiplication, Division, Addition, Subtraction", isCorrect: true },
      ],
    },
    {
      text: " Which of the following is the truncation division operator in Python?",
      options: [
        { id: 0, text: " |", isCorrect: false },
        { id: 1, text: "//", isCorrect: true },
        { id: 2, text: "/", isCorrect: true },
        { id: 3, text: "%", isCorrect: false },
      ],
    },
    {
        text: " Which of the following functions is a built-in function in python?",
        options: [
          { id: 0, text: "factorial()", isCorrect: false },
          { id: 1, text: "print()", isCorrect: true },
          { id: 2, text: "seed()", isCorrect: false },
          { id: 3, text: "sqrt()", isCorrect: false },
        ],
      },
      {
        text: "Which of the following is not a core data type in Python programming?",
        options: [
          { id: 0, text: "Tuples", isCorrect: false },
          { id: 1, text: "Lists", isCorrect: false },
          { id: 2, text: "Class", isCorrect: true },
          { id: 3, text: " Dictionary", isCorrect: false },
        ],
      },
      {
        text: "Which one of the following is not a keyword in Python language?",
        options: [
          { id: 0, text: "pass", isCorrect: false },
          { id: 1, text: "eval", isCorrect: true },
          { id: 2, text: "assert", isCorrect: false },
          { id: 3, text: "nonlocal.", isCorrect: false },
        ],
      },
      {
        text: "What arithmetic operators cannot be used with strings in Python?",
        options: [
          { id: 0, text: "*", isCorrect: false },
          { id: 1, text: "–", isCorrect: true },
          { id: 2, text: "+", isCorrect: false },
          { id: 3, text: "All of the mentioned", isCorrect: false },
        ],
      },
      {
        text: "Which one of the following is the use of function in python?",
        options: [
          { id: 0, text: "Functions don’t provide better modularity for your application", isCorrect: false },
          { id: 1, text: "you can’t also create your own functions", isCorrect: false },
          { id: 2, text: "Functions are reusable pieces of programs", isCorrect: true },
          { id: 3, text: "All of the mentioned", isCorrect: false},
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

  /* Go to home page 0r logout*/
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
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
      <h1>PYTHON QUIZ</h1>

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

export default Pythonq;
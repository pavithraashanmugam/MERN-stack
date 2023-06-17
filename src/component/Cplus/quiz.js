import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link} from 'react-router-dom';


function Cplusq() {
    // Properties
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
    const questions = [
      {
        text: "What is C++?",
        options: [
          { id: 0, text: "C++ is an object oriented programming language", isCorrect: false },
          { id: 1, text: "C++ is a procedural programming language", isCorrect: false },
          { id: 2, text: "C++ supports both procedural and object oriented programming language", isCorrect: true },
          { id: 3, text: "C++ is a functional programming language", isCorrect: false },
        ],
      },
      {
        text: "Which of the following is used for comments in C++?",
        options: [
          { id: 0, text: "/* comment */", isCorrect: false },
          { id: 1, text: "// comment */", isCorrect: false },
          { id: 2, text: "// comment", isCorrect: false },
          { id: 3, text: "both // comment or /* comment */", isCorrect: true },
        ],
      },
      {
        text: "Which of the following user-defined header file extension used in c++?",
        options: [
          { id: 0, text: "hg", isCorrect: false },
          { id: 1, text: "cpp", isCorrect: false },
          { id: 2, text: "h", isCorrect: true },
          { id: 3, text: "hf", isCorrect: false },
        ],
      },
      {
        text: "Which of the following is not a type of Constructor in C++?",
        options: [
          { id: 0, text: "Default constructor", isCorrect: false },
          { id: 1, text: "Parameterized constructor", isCorrect: false },
          { id: 2, text: "Copy constructor", isCorrect: false },
          { id: 3, text: "Friend constructor", isCorrect: true },
        ],
      },
      {
        text: "Which of the following approach is used by C++?",
        options: [
          { id: 0, text: "Left-right", isCorrect: false },
          { id: 1, text: "Right-left", isCorrect: false },
          { id: 2, text: "Bottom-up", isCorrect: true },
          { id: 3, text: "Top-down", isCorrect: false },
        ],
      },
      {
          text: "Which of the following type is provided by C++ but not C?",
          options: [
            { id: 0, text: "double", isCorrect: false },
            { id: 1, text: "float", isCorrect: false },
            { id: 2, text: "int", isCorrect: false },
            { id: 3, text: "bool", isCorrect: true },
          ],
        },
        {
          text: "By default, all the files in C++ are opened in _________ mode.",
          options: [
            { id: 0, text: "Binary", isCorrect: false },
            { id: 1, text: "VTC", isCorrect: false },
            { id: 2, text: "Text", isCorrect: true },
            { id: 3, text: "ISCII", isCorrect: false },
          ],
        },
        {
          text: "What is the size of wchar_t in C++?",
          options: [
            { id: 0, text: "Based on the number of bits in the system", isCorrect: true },
            { id: 1, text: "2 or 4", isCorrect: false },
            { id: 2, text: "4", isCorrect: false },
            { id: 3, text: "2", isCorrect: false },
          ],
        },
        {
          text: "Which is more effective while calling the C++ functions?",
          options: [
            { id: 0, text: "call by object", isCorrect: false },
            { id: 1, text: "call by pointe", isCorrect: false },
            { id: 2, text: "call by value", isCorrect: false },
            { id: 3, text: "call by reference", isCorrect: true },
          ],
        },
        {
          text: "Which keyword is used to define the macros in c++?",
          options: [
            { id: 0, text: "#macro", isCorrect: false },
            { id: 1, text: "#define", isCorrect: true },
            { id: 2, text: "macro", isCorrect: false },
            { id: 3, text: "define", isCorrect: false },
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
        <h1>C++ QUIZ</h1>
  
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
  
  export default Cplusq;
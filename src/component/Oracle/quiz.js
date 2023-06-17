import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link} from 'react-router-dom';




function Oracleq() {
  
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is Oracle?",
      options: [
        { id: 0, text: "Oracle is a programming language", isCorrect: false },
        { id: 1, text: "Oracle is a sripting language", isCorrect: false },
        { id: 2, text: "Oracle is an operating system", isCorrect: false },
        { id: 3, text: "Oracle is a database", isCorrect: true },
      ],
    },
    {
      text: "What is Oracle database used for?",
      options: [
        { id: 0, text: " Store and retrieve relevant data", isCorrect: true },
        { id: 1, text: "Creating backup for data", isCorrect: false },
        { id: 2, text: "Accessing database servers", isCorrect: false },
        { id: 3, text: "Only store data", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is the smallest unit of storage in an Oracle database?",
      options: [
        { id: 0, text: "Data Block", isCorrect: true },
        { id: 1, text: "Segment", isCorrect: false },
        { id: 2, text: "Extent", isCorrect: false },
        { id: 3, text: "Data File", isCorrect: false },
      ],
    },
    {
      text: "Which of the following command is used to SELECT only one copy of each set of duplicable rows in SQL?",
      options: [
        { id: 0, text: "SELECT UNIQUE", isCorrect: false },
        { id: 1, text: "SELECT DISTINCT", isCorrect: true },
        { id: 2, text: "SELECT DIFFERENT", isCorrect: false },
        { id: 3, text: " All of the Mentioned", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is not a Key in SQL Server?",
      options: [
        { id: 0, text: "Foreign", isCorrect: false },
        { id: 1, text: "Alternate", isCorrect: true },
        { id: 2, text: "Secondary", isCorrect: true },
        { id: 3, text: "Primary", isCorrect: false },
      ],
    },
    {
        text: "Which of the following object types below cannot be replicated?",
        options: [
          { id: 0, text: "Data", isCorrect: false },
          { id: 1, text: " Sequence", isCorrect: true },
          { id: 2, text: "Trigger", isCorrect: false },
          { id: 3, text: "View", isCorrect: false },
        ],
      },
      {
        text: "Which of the following is/are the DDL statements?",
        options: [
          { id: 0, text: "Create", isCorrect: false },
          { id: 1, text: "Alter", isCorrect: false },
          { id: 2, text: "All of the Mentioned", isCorrect: true },
          { id: 3, text: "Drop", isCorrect: false },
        ],
      },
      {
        text: "Which of the following is not true about the COALESCE function?",
        options: [
          { id: 0, text: " It takes multiple alternate values", isCorrect: false },
          { id: 1, text: "It returns the first non-null expression in the parameter list.", isCorrect: false },
          { id: 2, text: "It returns the first value in the parameter list if it is null.", isCorrect: true },
          { id: 3, text: "None of the above.", isCorrect: false },
        ],
      },
      {
        text: "Which of the following comparison operators could be used in a multiple row query?",
        options: [
          { id: 0, text: "All of the above", isCorrect: true },
          { id: 1, text: "ALL operator", isCorrect: false },
          { id: 2, text: "ANY operator", isCorrect: false },
          { id: 3, text: "IN operator", isCorrect: false },
        ],
      },
      {
        text: "Which Which of the following is true about subqueries?",
        options: [
          { id: 0, text: "Subqueries could be used for Top-N analysis.", isCorrect: false },
          { id: 1, text: "Subqueries can be of two types – single-row subquery and multiple-row subquery.", isCorrect: false },
          { id: 2, text: "The outer and inner queries can get data from different tables.", isCorrect: false },
          { id: 3, text: " All of the above.", isCorrect: true },
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
  const retakeQuiz = () => {
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
      <h1>ORACLE QUIZ</h1>

      {/* 2. Current Score  */}
      <h2>SCORE: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => retakeQuiz()}>Retake Quiz</button>
          
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

export default Oracleq;
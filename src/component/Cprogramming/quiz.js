import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link} from 'react-router-dom';


function Cq() {
    // Properties
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
    const questions = [
      {
        text: "Which of the following is not a valid C variable name?",
        options: [
          { id: 0, text: "int number;", isCorrect: false },
          { id: 1, text: "float rate;", isCorrect: false },
          { id: 2, text: "int variable_count;", isCorrect: false },
          { id: 3, text: "int $main;", isCorrect: true },
        ],
      },
      {
        text: "All keywords in C are in ____________",
        options: [
          { id: 0, text: "LowerCase letters", isCorrect: true },
          { id: 1, text: "UpperCase letters", isCorrect: false },
          { id: 2, text: "CamelCase letters", isCorrect: false },
          { id: 3, text: "None of the mentioned", isCorrect: false },
        ],
      },
      {
        text: "Which of the following is true for variable names in C?",
        options: [
          { id: 0, text: "They can contain alphanumeric characters as well as special characters", isCorrect: false },
          { id: 1, text: "It is not an error to declare a variable to be one of the keywords(like goto, static)", isCorrect: false },
          { id: 2, text: "Variable names cannot start with a digit", isCorrect: true },
          { id: 3, text: "Variable can be of any length", isCorrect: false },
        ],
      },
      {
        text: "Which is valid C expression?",
        options: [
          { id: 0, text: "int my_num = 100,000;", isCorrect: false },
          { id: 1, text: "int my_num = 100000;", isCorrect: true },
          { id: 2, text: "int my num = 1000;", isCorrect: false },
          { id: 3, text: "int $my_num = 10000;", isCorrect: false },
        ],
      },
      {
        text: "Which of the following declaration is not supported by C language?",
        options: [
          { id: 0, text: "String str;", isCorrect: true },
          { id: 1, text: "char *str;", isCorrect: false },
          { id: 2, text: "float str = 3e2;", isCorrect: false },
          { id: 3, text: "Both “String str;” and “float str = 3e2;”", isCorrect: false },
        ],
      },
      {
          text: "Where in C the order of precedence of operators do not exist?",
          options: [
            { id: 0, text: "Within conditional statements, if, else", isCorrect: false },
            { id: 1, text: "Within while, do-while", isCorrect: false },
            { id: 2, text: "Within a macro definition", isCorrect: false },
            { id: 3, text: "None of the mentioned", isCorrect: true },
          ],
        },
        {
          text: "What is an example of iteration in C?",
          options: [
            { id: 0, text: "for", isCorrect: false },
            { id: 1, text: "while", isCorrect: false },
            { id: 2, text: "do-while", isCorrect: false },
            { id: 3, text: "all of the mentioned", isCorrect: true },
          ],
        },
        {
          text: "Functions in C Language are always _________",
          options: [
            { id: 0, text: "Internal", isCorrect: false },
            { id: 1, text: "External", isCorrect: true },
            { id: 2, text: "Both Internal and External", isCorrect: false },
            { id: 3, text: "External and Internal are not valid terms for functions", isCorrect: false },
          ],
        },
        {
          text: "What is #include <stdio.h>?",
          options: [
            { id: 0, text: "Preprocessor directive", isCorrect: true },
            { id: 1, text: "Inclusion directive", isCorrect: false },
            { id: 2, text: "File inclusion directive", isCorrect: false },
            { id: 3, text: "None of the mentioned", isCorrect: false },
          ],
        },
        {
          text: "Which of the following is not possible statically in C language?",
          options: [
            { id: 0, text: "Jagged Array", isCorrect: true },
            { id: 1, text: "Rectangular Array", isCorrect: false },
            { id: 2, text: "Cuboidal Array", isCorrect: false },
            { id: 3, text: "Multidimensional Array", isCorrect: false },
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
        <h1>C PROGRAMMING QUIZ</h1>
  
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
  
  export default Cq;
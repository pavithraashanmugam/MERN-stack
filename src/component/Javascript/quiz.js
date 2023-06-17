import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link} from 'react-router-dom';


function JavaScriptq() {
    // Properties
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
    const questions = [
      {
        text: "What is JavaScript?",
        options: [
          { id: 0, text: "JavaScript is a scripting language used to make the website interactive", isCorrect: true },
          { id: 1, text: "JavaScript is an assembly language used to make the website interactive", isCorrect: false },
          { id: 2, text: "JavaScript is a compiled language used to make the website interactive", isCorrect: false },
          { id: 3, text: "None of the mentioned", isCorrect: false },
        ],
      },
      {
        text: "Which of the following is not javascript data types?",
        options: [
          { id: 0, text: "Null type", isCorrect: false },
          { id: 1, text: "Undefined type", isCorrect: false },
          { id: 2, text: " Number type", isCorrect: false },
          { id: 3, text: "All of the mentioned", isCorrect: true },
        ],
      },
      {
        text: "Where is Client-side JavaScript code is embedded within HTML documents?",
        options: [
          { id: 0, text: "A URL that uses the special javascript:code", isCorrect: false },
          { id: 1, text: "A URL that uses the special javascript:protocol", isCorrect: true },
          { id: 2, text: "A URL that uses the special javascript:encoding", isCorrect: false },
          { id: 3, text: "A URL that uses the special javascript:stack", isCorrect: false },
        ],
      },
      {
        text: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        options: [
          { id: 0, text: "Position", isCorrect: false },
          { id: 1, text: "Window", isCorrect: true },
          { id: 2, text: "Standard", isCorrect: false },
          { id: 3, text: "Location", isCorrect: false },
        ],
      },
      {
        text: "Which of the following can be used to call a JavaScript Code Snippet?",
        options: [
          { id: 0, text: "Function/Method", isCorrect: true },
          { id: 1, text: "Preprocessor", isCorrect: false },
          { id: 2, text: "Triggering Event", isCorrect: false },
          { id: 3, text: "RMI", isCorrect: false },
        ],
      },
      {
          text: "Which of the following scoping type does JavaScript use?",
          options: [
            { id: 0, text: "Sequential", isCorrect: false },
            { id: 1, text: "Segmental", isCorrect: false },
            { id: 2, text: "Lexical", isCorrect: true },
            { id: 3, text: "Literal", isCorrect: false },
          ],
        },
        {
          text: "What is the basic difference between JavaScript and Java?",
          options: [
            { id: 0, text: "Functions are considered as fields", isCorrect: false },
            { id: 1, text: "Functions are values, and there is no hard distinction between methods and fields", isCorrect: true },
            { id: 2, text: "Variables are specific", isCorrect: false },
            { id: 3, text: "There is no difference", isCorrect: false },
          ],
        },
        {
          text: "Why JavaScript Engine is needed?",
          options: [
            { id: 0, text: "Both Compiling & Interpreting the JavaScript", isCorrect: false },
            { id: 1, text: "Parsing the javascript", isCorrect: false },
            { id: 2, text: "Interpreting the JavaScript", isCorrect: true },
            { id: 3, text: "Compiling the JavaScript", isCorrect: false },
          ],
        },
        {
          text: "Which of the following methods/operation does javascript use instead of == and !=?",
          options: [
            { id: 0, text: "JavaScript uses equalto()", isCorrect: false },
            { id: 1, text: "JavaScript uses equals() and notequals() instead", isCorrect: false },
            { id: 2, text: "JavaScript uses bitwise checking", isCorrect: false },
            { id: 3, text: "JavaScript uses === and !== instead", isCorrect: true },
          ],
        },
        {
          text: "Which of the following is not a framework?",
          options: [
            { id: 0, text: "JavaScript .NET", isCorrect: false },
            { id: 1, text: "JavaScript", isCorrect: true },
            { id: 2, text: "Cocoa JS", isCorrect: false },
            { id: 3, text: "jQuery", isCorrect: false },
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
        <h1>JAVA SCRIPT QUIZ</h1>
  
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
  
  export default JavaScriptq;
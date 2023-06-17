import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link} from 'react-router-dom';




function Htmlq() {
    // Properties
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
    const questions = [
      {
        text: "What is HTML?",
        options: [
          { id: 0, text: "HTML describes the structure of a webpage", isCorrect: false },
          { id: 1, text: "HTML is the standard markup language mainly used to create web pages", isCorrect: false },
          { id: 2, text: "HTML consists of a set of elements that helps the browser how to view the content", isCorrect: false },
          { id: 3, text: "All of the mentioned", isCorrect: true },
        ],
      },
      {
        text: "What is the correct syntax of doctype in HTML5?",
        options: [
          { id: 0, text: "</doctype html>", isCorrect: false },
          { id: 1, text: "<doctype html>", isCorrect: false },
          { id: 2, text: "<doctype html!>", isCorrect: false },
          { id: 3, text: "<!doctype html>", isCorrect: true },
        ],
      },
      {
        text: "Which of the following is used to read an HTML page and render it?",
        options: [
          { id: 0, text: "Web server", isCorrect: false },
          { id: 1, text: "Web network", isCorrect: false },
          { id: 2, text: "Web browser", isCorrect: true },
          { id: 3, text: "Web matrix", isCorrect: false },
        ],
      },
      {
        text: "Which of the following tag is used for inserting the largest heading in HTML?",
        options: [
          { id: 0, text: "head", isCorrect: false },
          { id: 1, text: "<h1>", isCorrect: true },
          { id: 2, text: "<h6>", isCorrect: false },
          { id: 3, text: "heading", isCorrect: false },
        ],
      },
      {
        text: "What is DOM in HTML?",
        options: [
          { id: 0, text: "Language dependent application programming", isCorrect: false },
          { id: 1, text: "Hierarchy of objects in ASP.NET", isCorrect: false },
          { id: 2, text: "Application programming interface", isCorrect: false },
          { id: 3, text: "Convention for representing and interacting with objects in html documents", isCorrect: true },
        ],
      },
      {
          text: "In which part of the HTML metadata is contained?",
          options: [
            { id: 0, text: "head tag", isCorrect: true },
            { id: 1, text: "title tag", isCorrect: false },
            { id: 2, text: "html tag", isCorrect: false },
            { id: 3, text: "body tag", isCorrect: false },
          ],
        },
        {
          text: "Which of the following is not the element associated with the HTML table layout?",
          options: [
            { id: 0, text: "alignment", isCorrect: false },
            { id: 1, text: "color", isCorrect: true },
            { id: 2, text: "size", isCorrect: false },
            { id: 3, text: "spanning", isCorrect: false },
          ],
        },
        {
          text: "In HTML, which attribute is used to create a link that opens in a new window tab?",
          options: [
            { id: 0, text: "src=”_blank”", isCorrect: false },
            { id: 1, text: "alt=”_blank”", isCorrect: false },
            { id: 2, text: "target=”_self”", isCorrect: false },
            { id: 3, text: "target=”_blank”", isCorrect: true },
          ],
        },
        {
          text: "Which of the following tag is used to create a text area in HTML Form?",
          options: [
            { id: 0, text: "<textarea> </textarea>", isCorrect: true },
            { id: 1, text: "<text></text>", isCorrect: false },
            { id: 2, text: "<input type=”text” />", isCorrect: false },
            { id: 3, text: "<input type=”textarea” />e", isCorrect: false },
          ],
        },
        {
          text: "What is the use of <hr/> tag in HTML?",
          options: [
            { id: 0, text: "For making content appearance italics", isCorrect: false },
            { id: 1, text: "To create vertical rule between sections", isCorrect: false },
            { id: 2, text: "To create a line break", isCorrect: false },
            { id: 3, text: "To create horizontal rule between sections", isCorrect: true },
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
        <h1>HTML QUIZ</h1>
  
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
  
  export default Htmlq;
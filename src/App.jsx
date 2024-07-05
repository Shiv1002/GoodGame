import { useState } from "react";
import "./App.css";
import QuestionSequence from "./QuestionSequence";
import { Link, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScoreCard from "./ScoresCard";
import Arrow from "./assets/arrow-right.svg";
import { Button, ButtonGroup } from "@chakra-ui/react";
const GKQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Rome", "Paris"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the boiling point of water?",
    options: ["50°C", "100°C", "150°C", "200°C"],
    correctAnswer: "100°C",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "J.K. Rowling",
      "Ernest Hemingway",
      "William Shakespeare",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "Which ocean is the largest?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "4", "6", "2"],
    correctAnswer: "2",
  },
  {
    question: "Which is the tallest animal in the world?",
    options: ["Elephant", "Giraffe", "Lion", "Kangaroo"],
    correctAnswer: "Giraffe",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Onion", "Cucumber", "Avocado"],
    correctAnswer: "Avocado",
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Yangtze", "Mississippi", "Amazon", "Nile"],
    correctAnswer: "Nile",
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Game}></Route>
        <Route
          path="/Score"
          Component={() => <ScoreCard GKQ={GKQuestions} />}
        ></Route>
      </Routes>
    </Router>
  );
}
function Game() {
  const [started, setStart] = useState(false);
  return (
    <>
      {!started ? (
        <div id="landing" className="">
          <header>Welcome to Game of knowledge</header>
          <h4>Score more | gain more</h4>
          <br />
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => setStart(true)}
            title="Start the game"
          >
            <div className="arrow-container">
              <img src={Arrow} alt="" />
            </div>{" "}
          </Button>
        </div>
      ) : (
        <QuestionSequence GKQ={GKQuestions} />
      )}
    </>
  );
}

export default App;

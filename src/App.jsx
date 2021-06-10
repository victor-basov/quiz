import "./app.css";
import { useState, useEffect, useMemo } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start"

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0")

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in the movies?",
      answers: [
        {
          text: "Johnny Depp",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "A flashing red traffic light signifies that a driver should do what?",
      answers: [
        {
          text: "Speed Up",
          correct: false,
        },
        {
          text: "Stop",
          correct: true,
        },
        {
          text: "Proceed with caution",
          correct: false,
        },
        {
          text: "Honk the horn",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "A knish is traditionally stuffed with what filling?",
      answers: [
        {
          text: "Potato",
          correct: true,
        },
        {
          text: "Creamed Corn",
          correct: false,
        },
        {
          text: "Lemon Custard",
          correct: false,
        },
        {
          text: "Raspberry Jelly",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "A pita is a type of what?",
      answers: [
        {
          text: "bean dip",
          correct: false,
        },
        {
          text: "french tart",
          correct: false,
        },
        {
          text: "fresh fruit",
          correct: false,
        },
        {
          text: "flat bread",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "A portrait that comically exaggerates a person's physical traits is called a what?",
      answers: [
        {
          text: "landscape",
          correct: false,
        },
        {
          text: "caricature",
          correct: true,
        },
        {
          text: "still life",
          correct: false,
        },
        {
          text: "impressionism",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "A second-year college student is usually called a what?",
      answers: [
        {
          text: "senior",
          correct: false,
        },
        {
          text: "junior",
          correct: false,
        },
        {
          text: "sophomore",
          correct: true,
        },
        {
          text: "freshman",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "A student who earns a J.D. can begin his or her career as a what?",
      answers: [
        {
          text: "doctor",
          correct: false,
        },
        {
          text: "bricklayer",
          correct: false,
        },
        {
          text: "accountant",
          correct: false,
        },
        {
          text: "lawyer",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "A triptych is a work of art that is painted on how many panels?",
      answers: [
        {
          text: "two",
          correct: false,
        },
        {
          text: "five",
          correct: false,
        },
        {
          text: "three",
          correct: true,
        },
        {
          text: "eight",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "According to a famous line from the existentialist play 'No Exit' what is hell?",
      answers: [
        {
          text: "oneself",
          correct: false,
        },
        {
          text: "other people",
          correct: true,
        },
        {
          text: "little made large",
          correct: false,
        },
        {
          text: "hued in green and blue",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "According to a popular slogan, what state should people not 'mess with'?",
      answers: [
        {
          text: "New York",
          correct: false,
        },
        {
          text: "Rhode Island",
          correct: false,
        },
        {
          text: "Montana",
          correct: false,
        },
        {
          text: "Texas",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "According to a Yale University study, what smell is the most recognizable to American adults?",
      answers: [
        {
          text: "tuna",
          correct: false,
        },
        {
          text: "laundry",
          correct: false,
        },
        {
          text: "popcorn",
          correct: false,
        },
        {
          text: "coffee",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "An airplane's black box is usually what color?",
      answers: [
        {
          text: "black",
          correct: false,
        },
        {
          text: "white",
          correct: false,
        },
        {
          text: "orange",
          correct: true,
        },
        {
          text: "purple",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Cheddar cheese got its name from a village in what country?",
      answers: [
        {
          text: "England",
          correct: true,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Switzerland",
          correct: false,
        },
        {
          text: "Denmark",
          correct: false,
        },
      ],
    },
  ];


  const moneyPyramid = useMemo(() =>
    [
      {id: 1, amount: "$ 100"},
      {id: 2, amount: "$ 200"},
      {id: 3, amount: "$ 300"},
      {id: 4, amount: "$ 500"},
      {id: 5, amount: "$ 1000"},
      {id: 6, amount: "$ 2000"},
      {id: 7, amount: "$ 4000"},
      {id: 8, amount: "$ 8000"},
      {id: 9, amount: "$ 16000"},
      {id: 10, amount: "$ 32000"},
      {id: 11, amount: "$ 64000"},
      {id: 12, amount: "$ 125000"},
      {id: 13, amount: "$ 250000"},
      {id: 14, amount: "$ 500000"},
      {id: 15, amount: "$ 1000000"},

    ].reverse(),
    []
   );


  useEffect(()=>{
    questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount);
  },[moneyPyramid, questionNumber])
  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

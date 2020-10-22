import React, { useEffect, useState } from "react";
import questions from "./questions.json";

function Game() {
  const [showModal, setShowModal] = useState(true);
  const [questiondata, setQuestion] = useState("");
  const [questiontitle, setTitle] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);

  const [answers, setAnswers] = React.useState("");

  useEffect(() => {
    if (timeLeft === 0) {
      console.log("TIME LEFT IS 0");
      setTimeLeft(null);
      setShowModal(false);
    }

    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  //Placeholder Variables need this for detailed scoreboard or react won't compile.
  var player1 = 0;
  var player2 = 0;
  var player3 = 0;

  return (
    <div className="wrapper">
      <div className="game-wrapper">
        <button className="button">Category</button>
        <button className="button" data-toggle="modal">
          Category
        </button>
        <button className="button" data-toggle="modal">
          Category
        </button>
        <button className="button" data-toggle="modal">
          Category
        </button>

        {questions.map(({ id, question, score, title, answers }, index) => (
          <button
            key={id}
            className="game-button"
            data-toggle="modal"
            data-target="#exampleModal"
            // disabled={wasClicked}
            onClick={() => {
              setTimeLeft(15);
              setTitle(title);
              setQuestion(question);
              setAnswers(answers);
            }}
          >
            {score}
          </button>
        ))}
      </div>

      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">player</h5>
            <p className="card-text">score</p>
            <button type="button" className="btn btn-danger">
              Give Up
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">player</h5>
            <p className="card-text">score</p>
            <button type="button" className="btn btn-danger">
              Give Up
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">player</h5>
            <p className="card-text">score</p>
            <button type="button" className="btn btn-danger">
              Give Up
            </button>
          </div>
        </div>
      </div>

      {showModal ? (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {timeLeft} {questiontitle}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">{questiondata}</div>
              <button id="bttn" class="button">
                {answers[0]}
              </button>
              <button id="bttn" class="button">
                {answers[1]}
              </button>
              <button id="bttn" class="button">
                {answers[2]}
              </button>
              <button id="bttn" class="button">
                {answers[3]}
              </button>

              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
      ) : null}
      {/**/}
      {/*======================= Score-Board ======================*/}
      {/*A Buttons can turn green when answer correct.*/}
      {/*A Button can turn red when answer incorrect.*/}
      {/*We Can have 1 row per player. 1 colum per question*/}
      {/*  {player1} Inside it needs to be declared.
      If its not declared it will give a failed to compile error
      so for now its commented out.*/}

      <div class="scoreboard-title">
        <h1 class="scoreboard-title">Detailed Scoreboard</h1>
      </div>

      {/*--------------------PLAYER 1 Scoreboard---------------*/}
      <div class="playername">
      <header>Player 1: {player1} </header>
      </div>

      {/*Category 1*/}
      <div class="btn-group">
        <button class="catagory">Cat1</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 2*/}
      <div class="btn-group">
        <button class="catagory">Cat2</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 3*/}
      <div class="btn-group">
        <button class="catagory">Cat3</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 4*/}
      <div class="btn-group">
        <button class="catagory">Cat4</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 5*/}
      <div class="btn-group">
        <button class="catagory">Cat5</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>
    {/*Player1-ScoreBoard-End*/}

{/*--------------------PLAYER 2 Scoreboard---------------*/}
<div class="playername">
      <header>Player 2: {player2} </header>
      </div>

      {/*Category 1*/}
      <div class="btn-group">
        <button class="catagory">Cat1</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 2*/}
      <div class="btn-group">
        <button class="catagory">Cat2</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 3*/}
      <div class="btn-group">
        <button class="catagory">Cat3</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 4*/}
      <div class="btn-group">
        <button class="catagory">Cat4</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 5*/}
      <div class="btn-group">
        <button class="catagory">Cat5</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>
    {/*Player2-ScoreBoard-End*/}

    {/*--------------------PLAYER 3 Scoreboard---------------*/}
    <div class="playername">
      <header>Player 3: {player3} </header>
      </div>

      {/*Category 1*/}
      <div class="btn-group">
        <button class="catagory">Cat1</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 2*/}
      <div class="btn-group">
        <button class="catagory">Cat2</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 3*/}
      <div class="btn-group">
        <button class="catagory">Cat3</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 4*/}
      <div class="btn-group">
        <button class="catagory">Cat4</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>

      {/*Category 5*/}
      <div class="btn-group">
        <button class="catagory">Cat5</button>
        <button class="scoreboard-question-btn-led">1</button>
        <button class="scoreboard-question-btn-led">2</button>
        <button class="scoreboard-question-btn-led">3</button>
        <button class="scoreboard-question-btn-led">4</button>
      </div>
    {/*Player3-ScoreBoard-End*/}

{/*<button id="demo" onclick="myFunction()"></button>*/}
{/*======================= Score-Board END ======================*/}
      {/**/}
    </div>
  );
}

export default Game;

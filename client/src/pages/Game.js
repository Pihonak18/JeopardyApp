import React, { useEffect, useState } from "react";
import questions from "./questions.json";

function Game(props) {
  const [showModal, setShowModal] = useState(true);
  const [questiondata, setQuestion] = useState("");
  const [questiontitle, setTitle] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);
  const playerName = props.location.playerName;

  const [answers, setAnswers] = useState("");

  useEffect(() => {
    // console.log(playerName);
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
            <h5 className="card-title">{playerName}</h5>
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

    </div>

      
  );
}

export default Game;

import React from "react";
import questions from "./questions.json";


function Game() {
  const [showModal, setShowModal] = React.useState(true);
  const [questiondata, setQuestion] = React.useState("");
  const [timer, setTimer] = React.useState(15);
  const [answers, setAnswers] = React.useState("");
  const [score, setScore] =React.useState("");
  
  //a hook to show or hide the modal when it has been clicked by a player or is still available
  let time = 20;
  const Timer = () => {
    setInterval(function countdown() {
      time -= 1;
      setTimer(time);
      if (time === 0) {
        
        setShowModal(false);
      }
    }, 1000);
  };

  

  //questions array of objs...attributes wasclicked boolean,false by default, if true disable
  //set diasble t
  return (
    <div className="wrapper">
      <div className="game-wrapper">
        <button className="button">Category</button>
        <button onclick="setTimeout(myFunction, 3000)" className="button" data-toggle="modal">
          Category
        </button>
        <button className="button" data-toggle="modal">
          Category
        </button>
        <button className="button" data-toggle="modal">
          Category
        </button>
          
        

        {questions.map(({ id, question, score, wasClicked, answers }, index) => (
          <button
            key={id}
            className="game-button"
            data-toggle="modal"
            data-target="#exampleModal"
            disabled={wasClicked}
            onClick={() => {
              Timer();
              setQuestion(question);
              setAnswers(answers);
              


            }}
          >
            {score}
          </button>
        ))}
      </div>

      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
          <p class="card-text">Score:{score}</p>
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
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {timer} Question Title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
      <div class="modal-body">{questiondata}</div>
      <button id="bttn" class="button">{answers[0]}</button>
      <button id="bttn" class="button">{answers[1]}</button>
      <button id="bttn" class="button">{answers[2]}</button>
      <button id="bttn" class="button">{answers[3]}</button>
      
              <div class="modal-footer">
                
              </div>
              
            </div>
          </div>
        </div>
      ) : null}
    </div>
    
  );
          
}


export default Game;

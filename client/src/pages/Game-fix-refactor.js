import React from "react";

function Game() {

  let time = 15;
  const Timer = () => {
    setInterval(function countdown() {
      time -= 1;
      if (time === 0) {
        //close out question
      }
    }, 1000);
  };
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
)
  var player1 = undefined;
  var player2 = undefined;
  var player3 = undefined;
  return (
    <div className="wrapper">
      <div className="game-wrapper">

        <button className='title-category' data-toggle="modal"  >Category</button>
        <button className='title-category' data-toggle="modal"  >Category</button>
        <button className='title-category' data-toggle="modal"  >Category</button>
        <button className='title-category' data-toggle="modal"  >Category</button>




        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          100
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          100
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          100
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          100
        </button>

        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          300
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          300
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          300
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          300
        </button>

        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          600
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          600
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          600
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          600
        </button>

        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          1000
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          1000
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          1000
        </button>
        <button
          className="game-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          1000
        </button>
      </div>



    {/*For the Give Up Button can put a popup that says "are you sure you want to give up?"*/}

      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>

            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger">
              Give Up
            </button>

            <p class="card-text">Total Score:</p>
            <button type="button" className="btn btn-danger" >Give Up</button>

          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>

            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger">
              Give Up
            </button>

            <p class="card-text">Total Score:</p>
            <button type="button" className="btn btn-danger" >Give Up</button>

          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>

            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger">
              Give Up
            </button>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Question Title
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
            <div class="modal-body">Question Data.</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>{/*<div className="wrapper">*/}

            <p class="card-text">Total Score:</p>
            <button type="button" className="btn btn-danger" >Give Up</button>
          </div>
        </div>
  );//</div>////Leave this commented out in case we need it.


      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Question Title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Question Data.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>

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

    //</div>//Leave this commented out in case we need it.


  //);//Leave this commented out in case we need it.
}

export default Game;

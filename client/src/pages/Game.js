import React from "react";



function Game() {
  return (
    <div className="wrapper">
      <div className="game-wrapper">
        <button className='game-title' >Category 1</button>
        <button className='game-title' >Category 2</button>
        <button className='game-title' >Category 3</button>
        <button className='game-title' >Category 4</button>


        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >1</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >2</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >3</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >4</button>

        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >1</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >2</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >3</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >4</button>

        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >1</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >2</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >3</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >4</button>

        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >1</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >2</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >3</button>
        <button className='game-button' data-toggle="modal" data-target="#exampleModal" >4</button>
     </div>

     <section className='jumbotron'>
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger" >Give Up</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger" >Give Up</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button type="button" className="btn btn-danger" >Give Up</button>
          </div>
        </div>
      </div>
      </section>
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
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      <div class="giveup">
        <header>JEOPARDY!</header>
      </div>
      <div class="btn-group">
        <button>Cat1</button>
        <button>Cat2</button>
        <button>Cat3</button>
        <button>Cat4</button>
      </div>

      <div class="btn-group">
        <button id="demo" onclick="myFunction()"></button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div class="btn-group">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div class="btn-group">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div class="btn-group">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button class="btn">Give Up</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button class="btn">Give Up</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Player</h5>
            <p class="card-text">Score:</p>
            <button class="btn">Give Up</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Game;

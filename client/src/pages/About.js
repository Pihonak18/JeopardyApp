import React from "react";
// import "../pages/style.css";
// import "../pages/about.css";
import "./about.css" 

function About() {
  return (
  <div class="container-fluid mycontainer">
  <div className="jumbotron">
  <h1 className="display-4">About</h1>
    <hr className="my-4"/>
    <div className='about-wrapper'>
    <h1 className="h1-intro">Introduction</h1>
    <p className="intro-p-tag text-box">This is based of the TV show Jeopardy. Jeopardy is a game show where you answer questions for points and win prizes.
    To play this game select a catagory and question by clicking on the buttons on the game page. Players are listed below.
    You can see the total score and a detailed score for each player on each question.
    </p>
    </div>
    <div className='rules-wrapper'>
    <h1 className="h1-rules">Rules</h1>
    <p className="lead rules-p-tag text-box" style={{color:"grey"}}>1) Start by picking a category and question.</p>
    <p className="lead rules-p-tag text-box" style={{color: "grey"}}>2) Click on the chosen box for the question.</p>
    <p className="lead rules-p-tag text-box" style={{color: "grey"}}>3) give the answer in the form of a question.</p>
    <p>Test</p>
    </div>
  </div>
  </div>
   );
}

export default About;

//style={{color:"blue"}}
//style={{color: "#fc6203"}}
//text-align: center;
//style={{text-align: center;}}
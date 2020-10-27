import React, { Component } from "react";
import "./style.css"
class Home extends Component {
  render() {
    const readybanner = {
      color: "white",
      background: "DodgerBlue",
      width: "200px",
      padding: "25px",
      padding: "10px",
      border: "25px solid navy"
    };
    const readybannerh2 = {
      color: "white",
      background: "DodgerBlue",
      width: "200px",
      padding: "25px",
      padding: "10px",
      border: "25px solid navy"
    };
    return (
      <div style={{readybanner}}>
        {/*<h2 style={{color: "red", background: "green"}}>*/}
        <h2 style={{color: "white", background:	"rgba(2, 117, 216, 0.75", padding: "10px",}}>
        {/* <h2 id="ready-banner" className="p-3 mb-2 bg-primary text-white ready-banner"> */}
        {/* <h2 id="ready-banner" className="text-white ready-banner"> */}
          Are you Ready to Play Jeopardy?
        </h2>
        <img
          src="https://i.ibb.co/mvvMCpD/America-jeopardy-2019-web-app.png"
          height="370"
          alt="jeopardy tag"          
        />
      </div>
    );
  }
}

export default Home;

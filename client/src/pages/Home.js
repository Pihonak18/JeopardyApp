import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="p-3 mb-2 bg-primary text-white">
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

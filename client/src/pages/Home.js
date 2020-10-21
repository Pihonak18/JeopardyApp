import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="p-3 mb-2 bg-primary text-white">
          Are you Ready to Play Jeopardy?
        </h2>
        <img
          src="https://www.americamagazine.org/sites/default/files/main_image/America-jeopardy-2019.jpg"
          height="370"
          alt="jeopardy tag"
        />
      </div>
    );
  }
}

export default Home;

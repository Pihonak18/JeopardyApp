import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Highscores from "./pages/Highscores";
import About from "./pages/About";
import Buttons from "./components/Buttons";

import "./pages/style.css";

function App() {
  return (
    <Router>
      <div>
        <Buttons />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/highscores" component={Highscores} />
      </div>
    </Router>
  );
}

export default App;

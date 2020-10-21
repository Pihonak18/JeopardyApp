import React, { useEffect, useState } from "react";
import { Input, FormBtn } from "../components/Buttons/Form";
import API from "../utils/API";

function Highscores() {
  const [highscores, setHighscores] = useState([]);
  // const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadHighscores();
  }, []);

  function loadHighscores() {
    API.getScores()
      .then((res) => setHighscores(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>
        {" "}
        Below is a list of all the highscores and the players who earned them!{" "}
      </h1>

      {highscores}
    </div>
  );
}

export default Highscores;

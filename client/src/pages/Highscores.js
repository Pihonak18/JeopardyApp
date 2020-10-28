import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Highscores() {
  const [highscores, setHighscores] = useState([]);

  useEffect(() => {
    API.getScores()

      .then((res) => setHighscores(res.data))

      .catch((err) => console.log(err));
  });

  const saveScore = () => {
    API.saveScore().catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="scores-list">
        {" "}
        Below is a list of all the highscores and the players who earned them!{" "}
        {highscores.map((scores) => (
          <li key={scores.id}>
            {scores.username} {scores.score}
          </li>
        ))}
      </h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="score" />
        <button type="submit" onClick={saveScore}>
          Save
        </button>
      </form>
    </div>
  );
}

export default Highscores;

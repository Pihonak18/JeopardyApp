import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Highscores() {
  const [highscores, setHighscores] = useState([]);

  useEffect(() => {
    API.getScores()

      .then((res) => setHighscores(res.data))

      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>
        {" "}
        Below is a list of all the highscores and the players who earned them!{" "}
        {highscores.map((scores) => (
          <li key={scores.id}>
            {scores.username} {scores.score}
          </li>
        ))}
      </h1>
    </div>
  );
}

export default Highscores;

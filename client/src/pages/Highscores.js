import React, { useEffect, useState } from "react";
import { Input, FormBtn } from "../components/Buttons/Form";
import API from "../utils/API";

function Highscores() {
  const [highscores, setHighscores] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadHighscores();
  }, []);

  function loadHighscores() {
    API.getScores()
      .then((res) => setHighscores(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.score) {
      API.saveScore({
        username: formObject.username,
        score: formObject.score,
      })
        .then((res) => loadHighscores())
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <h1>
        {" "}
        Below is a list of all the highscores and the players who earned them!
        Be sure to add yours!{" "}
      </h1>
      <form>
        <Input
          onChange={handleInputChange}
          name="user"
          placeholder="name (required)"
        />
        <Input
          onChange={handleInputChange}
          name="score"
          placeholder="score (required)"
        />
        <FormBtn
          disabled={!(formObject.username && formObject.score)}
          onClick={handleFormSubmit}
        >
          Save
        </FormBtn>
      </form>
      {highscores}
    </div>
  );
}

export default Highscores;

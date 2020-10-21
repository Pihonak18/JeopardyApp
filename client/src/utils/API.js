import axios from "axios";

export default {
  //gets all the highscores
  getScores: function () {
    return axios.get("/api/highscores");
  },
  //if user wants their highscore/scores
  // getScore: function (id) {
  //   return axios.get("api/highscores/" + id);
  // },
  //user can save their score and it will save to highscores page....?
  saveScore: function (scoreData) {
    return axios.post("/api/highscores", scoreData);
  },
  //get all usernames....
  getUserNames: function () {
    return axios.get("/api/highscores");
  },
};

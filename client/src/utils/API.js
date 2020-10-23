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
  saveUser: function (userData) {
    return axios.post("/api/games", userData);
  },
  //get all usernames....
  getUserName: function () {
    return axios.get("/api/games");
  },
};

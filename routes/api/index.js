const router = require("express").Router();
const scoreRoutes = require("./scores");

router.use("/highscores", scoreRoutes);
module.exports = router;

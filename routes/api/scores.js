const router = require("express").Router();
const playersScores = require("../../controllers/playersScores");

router.route("/").get(playersScores.findAll);

router.post(playersScores.create);

router.route("/:id").put(playersScores.update);

module.exports = router;

const router = require("express").Router();
const playersScores = require("../../controllers/playersScores");

router.route("/").get(playersScores.findAll);

router.post(playersScores.create);
//if previous user then update
//upsert

router.route("/:id").put(playersScores.update);

module.exports = router;

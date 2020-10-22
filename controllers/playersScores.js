const db = require("../models");
module.exports = {
  findAll: function (req, res) {
    console.log("test");
    db.Players.find({ $query: {}, $orderby: { score: 1 } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        res.status(422).json(err);
      });
  },

  // findAll: function (req, res) {
  //   db.Players.find(req.query)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => {
  //       res.status(422).json(err);
  //     });
  // },
  // findById: function (req, res) {
  //   db.Players.findById(req.params.id)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  create: function (req, res) {
    db.Players.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Players.findOneandUpdate({ _id: res.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

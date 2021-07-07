const Game = require("../models/game");
var express = require("express");
var router = express.Router();
module.exports = router;

router.get("/", (req, res, next) => {
  Game.find()
    .then((games) => {
      res.status(200).json(games);
      console.log(games);
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occured",
        error: error,
      });
    });
});

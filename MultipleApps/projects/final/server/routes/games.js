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

router.post("/", (req, res, next) => {
  // const maxMessageId = sequenceGenerator.nextId("messages");

  const game = new Game({
    id: req.body.id,
    console: req.body.console,
    name: req.body.name,
    rareness: req.body.rareness,
    price: req.body.price,
    release: req.body.release,
    genre: req.body.genre,
  });
console.log(Game);
  // game
  //   .save()
  //   .then((createdGame) => {
  //     res.status(201).json({
  //       notice: "Game added successfully",
  //       game: createdGame,
  //     });
  //   })
  //   .catch((error) => {
  //     res.status(500).json({
  //       message: "An error occurred",
  //       error: error,
  //     });
  //   });
});

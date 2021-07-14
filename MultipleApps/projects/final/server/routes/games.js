const Game = require("../models/game");
const sequenceGenerator = require("./sequenceGenerator");
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

router.put("/:id", (req, res, next) => {
  Game.findOne({ id: req.params.id })
    .then((game) => {
      game.id = req.body.id,
      game.console = req.body.console;
      game.name = req.body.name;
      game.rareness = req.body.rareness;
      game.price = req.body.price;
      game.release = req.body.release;
      game.genre = req.body.genre;

     Game.updateOne({ id: req.params.id }, game)
        .then((result) => {
          res.status(204).json({
            message: "Game updated successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Game not found.",
        error: { message: "Game not found" },
      });
    });
});

router.post("/", (req, res, next) => {
//   const maxGameId = sequenceGenerator.nextId();
// console.log(maxGameId);
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
  game
    .save()
    .then((createdGame) => {
      res.status(201).json({
        notice: "Game added successfully",
        game: createdGame,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occurred",
        error: error,
      });
    });
});

const Collection = require("../models/collection");
var express = require("express");
var router = express.Router();
module.exports = router;

router.get("/", (req, res, next) => {
  Collection.find()
    .then((collections) => {
      res.status(200).json(collections);
      console.log(collections);
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

  const game = new Collection({
    id: req.body.id,
    console: req.body.console,
    name: req.body.name,
    rareness: req.body.rareness,
    release: req.body.release,
    price: req.body.price,
    genre: req.body.genre,
  });
  console.log(game);
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


router.delete("/:id", (req, res, next) => {
  console.log(req.params.id);
  res.status(200).json({message: "Game Deleted"})
 Collection.findOne({ id: req.params.id })
    .then((collection) => {
      Collection.deleteOne({ id: req.params.id })
        .then((result) => {
          res.status(204).json({
            message: "Game deleted successfully",
          });
        })
      })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        })
    .catch((error) => {
      res.status(500).json({
        message: "Game not found.",
        error: { message: "Game not found" },
      });
    });
})
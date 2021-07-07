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

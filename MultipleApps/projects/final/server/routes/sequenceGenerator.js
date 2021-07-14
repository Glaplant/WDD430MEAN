var Sequence = require("../models/sequence");

var maxGameId;
var sequenceId = null;

function SequenceGenerator() {
  Sequence.findOne().exec(function (err, sequence) {
    if (err) {
      return res.status(500).json({
        title: "An error occurred",
        error: err,
      });
    }

    sequenceId = sequence.id;
    maxGameId = sequence.maxGameId;
  });
}

SequenceGenerator.prototype.nextId = function () {
  var updateObject = {};
  var nextId;


      maxGametId++;
      updateObject = { maxGameId: maxGameId };
      nextId = maxGameId;

  

  Sequence.updateOne(
    { id: sequenceId },
    { $set: updateObject },
    function (err) {
      if (err) {
        console.log("nextId error = " + err);
        return null;
      }
    }
  );

  return nextId;
};

module.exports = new SequenceGenerator();

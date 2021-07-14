const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
    maxGameId: { type: Number },

   
 });
 
 module.exports = mongoose.model('Sequence', sequenceSchema);
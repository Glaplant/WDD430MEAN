const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
    maxContactId: { type: Number },
    maxDocumentId: { type: Number },
    maxMessageId: { type: Number }
 });
 
 module.exports = mongoose.model('Sequence', sequenceSchema);
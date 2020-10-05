var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var caseSchema = new Schema({
  caseId: String,
  caseName: String,
  ownerId: String,
  platform: String,
  progress: Number,
  rejectReason: String,
  data: [Number]
})

module.exports = mongoose.model('case', caseSchema); 
var mongoose = require('mongoose');

//连接MongoDB数据库
let mongoStatus = undefined;
mongoose.connect('mongodb://127.0.0.1:27017/test01', { useUnifiedTopology: true, useNewUrlParser: true }).catch(console.log);
mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.");
  mongoStatus = 0;
});
mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
  mongoStatus = -1;
});
mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
  mongoStatus = -1;
});

function getMongoStatus() {
  return mongoStatus;
}

exports.getMongoStatus = getMongoStatus;

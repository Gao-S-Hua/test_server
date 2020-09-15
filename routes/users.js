var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var sha256 = require('js-sha256');
var jwt = require('jsonwebtoken');
var { privateKey, exprTime } = require('../utils/auth');
var Users = require('../models/user');
//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/test01', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});
mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});
mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});

const userError = {
  status: -1,
  data: {}
}

router.post('/', function(req, res) {
  const userName = req.body.name;
  const userPassword = req.body.password
  Users.find({
    name: userName,
    password: sha256(userPassword)
  }, (err, dbres) => {
    if(err || dbres.length === 0) {
      res.json(userError)
      return;
    }
    const userInfo = dbres[0];
    console.log(dbres);
    const time = new Date();
    res.json({
      status: 0,
      data: {
        name: userInfo.name,
        type: userInfo.type,
        token: jwt.sign({id: userInfo.id, expr: time.getTime() + exprTime * 1000 * 60}, privateKey)
      }
    })
  })
});

module.exports = router;

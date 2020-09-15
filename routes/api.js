var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Users = require('../models/user');

let status = 0;

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
  status = 1;
})

mongoose.connection.on('error', () => {
  console.log('MongoDB ERROR!');
  status = -1;
})

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected!');
  status = 0;
})

function returnErr(res){
  res.json({
    status: 1,
    msg: '',
    result: {
      length: 0,
      list: []
    }
  })
}

router.get('/users', (req, res, next) => {
  if(status !== 1){
    // setTimeout( (res) => {returnErr(res)}, 2000 )
    returnErr(res);
  }
  Users.find({}, (err, doc) => {
    if(err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      res.json({
        status: 0,
        msg: '',
        result: {
          length: doc.length,
          list: doc
        }
      })
    }
  })
})

router.get('/connect', (req, res, next) => {
  if(status !== 1)
    mongoose.connect('mongodb://127.0.0.1:27017/mydb', {useNewUrlParser: true}).then( () => {
      res.json({
        status: 0,
        result: {status: 1}
      })
    }).catch(
      () => {
        res.json({
          status: 0,
          result: {status: -1}
        })
      }
    );
})

router.get('/db', (req, res) => {
  res.json({
    status: 0,
    result: {status}
  })
})

router.get('/disdb', (req, res, next) => {
  mongoose.disconnect( (err) => {
    if(err){
      res.json({
        status: 1,
        result: {status: 1}
      })
    } else {
      res.json({
        status: 0,
        result: {status: 0}
      })
    }
  } )
})

module.exports = router;
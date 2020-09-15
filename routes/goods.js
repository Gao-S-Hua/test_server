var express = require('express');
var router = express.Router();
var Goods = require('../models/goods');

router.get('/', function(req, res, next) {
  Goods.find({}, function(err, doc) {
    if(err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
  // res.send('Hello, Goods List:')
})
module.exports = router;
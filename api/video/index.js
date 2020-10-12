var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/list', (req, res) => {
  var list = fs.readdirSync('/Users/gao/Downloads');
  const videoReg = new RegExp('(.mp4)$');
  list = list.filter( name => videoReg.test(name)).sort();
  res.json(list);
})

module.exports = router;
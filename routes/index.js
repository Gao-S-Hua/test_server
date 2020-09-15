var express = require('express');
var router = express.Router();

var fsCallback = function(error, data) {
  if(error) throw error;
  res.writeHead(200);
  res.write(data);
  res.end();
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var fsCallback = function(error, data) {
    if(error) throw error;
    res.writeHead(200);
    res.write(data);
    res.end();
  }
  doc = fs.readFile(__dirname + '../public/maindfsef.html', fsCallback);
  // res.sendFile('../piblic/main.html');
});

module.exports = router;

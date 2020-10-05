var express = require('express');
var router = express.Router();

var usersRouter = require('./users');
var uploadRouter = require('./upload');
var videoRouter = require('./video');
var caseRouter = require('./case');
router.use('/',(req, res, next) => {
  console.log('userId: ' + req.userId);
  next();
})
router.use('/case', caseRouter);
router.use('/users', usersRouter);
router.use('/upload', uploadRouter);
router.use('/video', videoRouter);

module.exports = router;
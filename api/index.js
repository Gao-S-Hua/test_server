var express = require('express');
var router = express.Router();

var authCheck = require('./common/authCheck');
var usersRouter = require('./users');
var uploadRouter = require('./upload');
var videoRouter = require('./video');
var caseRouter = require('./case');

router.use('/', authCheck);
router.use('/users', usersRouter);
router.use('/case', caseRouter);
router.use('/upload', uploadRouter);
router.use('/video', videoRouter);

module.exports = router;
var express = require('express');
var router = express.Router();
var loginPost = require('./loginPost');
var signUpPost = require('./signUpPost');

router.post('/', loginPost);
router.post('/signup', signUpPost);
module.exports = router;

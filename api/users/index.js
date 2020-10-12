var express = require('express');
var router = express.Router();
var loginPost = require('./loginPost');
var signUpPost = require('./signUpPost');
var userGet = require('./userGet');

router.post('/login', loginPost);
router.post('/signup', signUpPost);
router.get('/info', userGet);
module.exports = router;

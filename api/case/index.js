var express = require('express');
var router = express.Router();

var myCase = require('./myCase')

router.get('/mycase', myCase);
// router.post('/signup', signUpPost);
module.exports = router;

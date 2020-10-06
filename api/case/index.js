var express = require('express');
var router = express.Router();

var myCase = require('./myCase');
var caseGet = require('./caseGet');
var searchPost = require('./searchPost');

router.get('/mycase', myCase);
router.get('/info/:caseId', caseGet);
router.post('/search', searchPost);

module.exports = router;

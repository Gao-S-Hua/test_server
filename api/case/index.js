var express = require('express');
var router = express.Router();

var myCase = require('./myCase');
var caseGet = require('./caseGet');
var searchPost = require('./searchPost');
var newCasePost = require('./newCasePost');
var statusGet = require('./statusGet');

router.get('/mycase', myCase);
router.get('/stat', statusGet);
router.get('/info/:caseId', caseGet);
router.post('/search', searchPost);
router.post('/newcase', newCasePost);


module.exports = router;

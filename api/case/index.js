var express = require('express');
var router = express.Router();

var myCase = require('./myCase');
var caseGet = require('./caseGet');
router.get('/mycase', myCase);
router.get('/info/:caseId', caseGet);

module.exports = router;

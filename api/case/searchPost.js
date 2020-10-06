var caseModel = require('../../models/case');

async function searchPost(req, res) {
  const searchString = req.body.search;
  console.log(req.body);
  res.json([
    { caseId: 'sef', caseName: 'SPI Fmax' },
    { caseId: 'tsu', caseName: 'SPI TSU/THD' },
    { caseId: 'cto', caseName: 'SPI Clock to Out' },
  ])
}

module.exports = searchPost;
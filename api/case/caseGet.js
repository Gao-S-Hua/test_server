const caseModel = require('../../models/case');

function caseGet(req, res) {
  const { caseId } = req.params;
  console.log(caseId);
  const testData = {
    caseId,
    caseName: 'SPI Fmax Test on Kintex',
    ownerId: 'feu3hf',
    ownerName: 'huahua',
    platform: 'Versal',
    progress: 0,
    rejectReason: '',
    data: [15, 29, 37, 40, 42, 41, 42 ,43, 42]
  }
  res.json(testData);
}

module.exports = caseGet;
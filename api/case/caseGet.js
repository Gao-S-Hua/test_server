const caseModel = require('../../models/case');
const idToUserName = require('../common/idToUserName');

function caseGet(req, res) {
  const { caseId } = req.params;
  caseModel.findOne({caseId}).then(async (dbres) => {
    const name = await idToUserName(dbres.ownerId);
    const testData = {
      caseId,
      caseName: dbres.caseName,
      ownerId: dbres.ownerId,
      ownerName: name,
      platform: dbres.platform,
      progress: dbres.progress,
      rejectReason: dbres.rejectReason,
      data: dbres.data
    }
    res.json(testData);
  })
}

module.exports = caseGet;
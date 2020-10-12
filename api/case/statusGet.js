const caseModel = require('../../models/case');

async function statusGet(req, res) {
  const userId = req.userId;
  const completeCount = await caseModel.count({ownerId: userId, progress: 0});
  const inProgressCount = await caseModel.count({ownerId: userId, progress: 1});
  const rejectCount = await caseModel.count({ownerId: userId, progress: -1});
  res.json({
    complete: completeCount,
    inProgress: inProgressCount,
    reject: rejectCount
  })
}

module.exports = statusGet;
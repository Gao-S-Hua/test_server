const caseModel = require('../../models/case');
const { v4: uuidv4 } = require('uuid');

async function newCasePost(req, res) {
  let data = []; 
  let rejectReason = '';
  let progress;
  switch(req.body.testTime){
    case(0): { //Draft
      progress = -1;
      rejectReason = 'No Authority';
      break;
    }
    case(1): { //urgent
      progress = 0;
      data = fakeData(10);
      break
    }
    default: {
      progress = 1;
    }
  }
  const newDoc = {
    caseId: uuidv4().slice(0, 8).toUpperCase(),
    caseName: req.body.testName,
    ownerId: req.userId,
    platform: req.body.platform,
    progress,
    rejectReason,
    data
  };

  caseModel.create(newDoc);
  setTimeout(() => res.json({status: 0}), 1000);
}

function fakeData(num) {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push((Math.random() * 100).toFixed(0));
  }
  return data;
}

module.exports = newCasePost;
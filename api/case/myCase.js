const caseModel = require('../../models/case');
const idToUserName = require('../common/idToUserName');

function myCase(req, res) {
  caseModel.find({ownerId: req.userId}).then(
    async (doc) => {
      const rtn = [];
      for (let i = 0; i < doc.length; i++) {
        const newCase = { ...doc[i]._doc };
        newCase["ownerName"] = await idToUserName(doc[i].ownerId);
        rtn.push(newCase);
      }
      res.json(rtn);
    }
  ).catch(
    () => res.json([])
  )
}

module.exports = myCase;
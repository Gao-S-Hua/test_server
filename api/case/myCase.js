const caseModel = require('../../models/case');
const userModel = require('../../models/user');

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

const mem = new Map();
async function idToUserName(id) {
  if (mem.has(id)) return mem.get(id);
  const user = await userModel.findOne({id});
  mem.set(id, user.name);
  return user.name;
}

module.exports = myCase;
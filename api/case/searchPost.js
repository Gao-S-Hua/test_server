var caseModel = require('../../models/case');
const idToUserName = require('../common/idToUserName');

async function searchPost(req, res) {
  const searchString = req.body.search;
  // let reg;
  // const strArr = searchString.split(' ');
  // if (strArr.length === 1) {
  //   reg = new RegExp(strArr[0], 'i');
  // } else {
  //   reg = new RegExp('(' + strArr.join('|') + ')', 'i');
  // }
  const reg = new RegExp(searchString, 'i');
  caseModel.find({caseName: reg}).then( async (dbres) => {
    const rtn = JSON.parse(JSON.stringify(dbres));
    for (let i = 0; i < rtn.length; i++) {
      rtn[i].ownerName = await idToUserName(rtn[i].ownerId);
    }
    res.json(rtn)
  })
}

module.exports = searchPost;
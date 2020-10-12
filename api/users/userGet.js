var Users = require('../../models/user');

async function userGet(req, res) {
  if (req.userId) {
    const user = await Users.findOne({id: req.userId});
    const rtn = {
      name: user.name,
      type: user.type
    }
    res.json(rtn);
  } else {
    res.status(401).json({});
  }
}

module.exports = userGet;
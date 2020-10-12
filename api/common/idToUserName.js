const userModel = require('../../models/user');

const mem = new Map();
async function idToUserName(id) {
  if (mem.has(id)) return mem.get(id);
  const user = await userModel.findOne({id});
  mem.set(id, user.name);
  return user.name;
}

module.exports = idToUserName;
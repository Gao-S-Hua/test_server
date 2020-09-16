const { getMongoStatus } = require('./dbService');
function checkMongo(req, res, next) {
  const status = getMongoStatus();
  if (status === 0) next();
  else res.send(`<h1>Server Database is closed</h1> <h2> Database Status: ${status}</h2>`)
}

module.exports = checkMongo;
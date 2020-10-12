const jwt = require('jsonwebtoken');

const privateKey = 'secret key: e5b5410415bde908bd4dee15d';
const exprTime = 120;

function jwtSign(id) {
  const time = new Date();
  return jwt.sign({ id, expr: time.getTime() + exprTime * 1000 * 60}, privateKey);
}

exports.jwtSign = jwtSign;
exports.privateKey = privateKey;
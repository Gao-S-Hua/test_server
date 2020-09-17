const axios = require('axios');

async function testGet(req, res) {
  console.log(req.query);
  if (req.query.id && req.query.id > 0) {
    const ans = await axios.get('http://swapi.dev/api/people/' + req.query.id);
    res.json(ans.data);
  } else {
    res.send("No Data");
  }

}

module.exports = testGet;
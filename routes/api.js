var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/people', (req, res) => {
  console.log(req.params);
  res.redirect('https://swapi.dev/api/people/1');
})

var multer = require('multer')
var storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: function (request, file, callback) {
      const str = 'USER-' + file.originalname;
      callback(null, str);
    }
});

var upload = multer({ storage: storage, limits: { fileSize: 3000 } });

router.post('/upload', upload.single('userfile'), (req, res) => {
  res.json({ status: 1 });
})

module.exports = router;
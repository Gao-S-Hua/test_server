var express = require('express');
var multer = require('multer');
var path = require('path');

var router = express.Router();
var storage = multer.diskStorage({
    destination: path.join(__dirname, '../../uploads'),
    filename: function (request, file, callback) {
      const str = 'USER-' + file.originalname;
      callback(null, str);
    }
});

var upload = multer({ storage: storage, limits: { fileSize: 100 * 1024 } });

router.post('/', upload.single('userfile'), (req, res) => {
  res.json({ status: 1 });
})

module.exports = router;
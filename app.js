var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var api = require('./api');
var checkMongo = require('./utils/checkMongo');
var getUser = require('./utils/getUser');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(checkMongo);

app.use(express.static(path.join(__dirname, 'dist'),{lastModified: false, etag: true}));
app.use('/api', getUser);
app.use('/api', api);
app.use('/media', express.static('/Users/gao/Downloads'));
app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, './dist/index.html')); })
// catch 404 and forward to error handler
app.use(function(req, res, next) { next(createError(404)); });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

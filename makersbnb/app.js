var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/', indexRouter);

app.get('/', (req,res)=> { //get method
  res.sendFile(path.join(__dirname + '/views/index.html')); //send response
})

app.post('/signupsubmit', (req,res)=> { //post method
  //console.log(req.body.name);
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  //res.sendStatus(200);
  //Users.create(name, email, password)
  res.redirect('/main')
})

app.post('/loginsubmit', (req,res)=> {
  var email = req.body.user_email;
  var password = req.body.user_password;
  //Users.verify(email,password)
  console.log(email);
  console.log(password);
  // console.log(password);
  if (true) { //replace true with authenticate method call
    res.redirect('/main')
  } else {
    res.redirect('/')
  }

})

app.get('/main', (req,res)=> {
  res.sendFile(path.join(__dirname + '/views/main.html')); //send response
})

app.get('/login', (req,res)=> {
  res.sendFile(path.join(__dirname + '/views/login.html')); //send response
})

app.post('/make_listing', (req,res)=>{
  var listing_name = req.body.listing_name;
  var listing_description = req.body.listing_description;
  var listing_price = req.body.listing_price;
  var listing_dates = req.body.listing_dates;
  console.log(req.body);
  res.redirect('/main');
})


app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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

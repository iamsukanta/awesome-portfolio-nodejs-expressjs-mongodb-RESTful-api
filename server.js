const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');
const db = require('./configs/database.config')
const app = express();
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {

  var allowedOrigins = ['http://localhost:8080', 'http://localhost:8081',
    'https://iamsukanta.github.io', 'https://www.iamsukanta.github.io', 'http://www.iamsukanta.github.io',
    'http://iamsukanta.github.io'];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, HEAD, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Expose-Headers', 'Authorization');
  return next();
});


require('dotenv').config();

//Configure Mongoose
mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true }).
then(()=>{
  console.log('Mongodb Connected Successfully');
})
.catch((err)=>{
  console.error(err)
});

const apiPrefix = process.env.API_PREFIX

// ------------------ importing route files ------------------------
const usersRouter = require('./app/http/routes/users.route')
const portfoliosRouter = require('./app/http/routes/portfolios.route')
const resumesRouter = require('./app/http/routes/resumes.route')
const aboutmeRouter = require('./app/http/routes/aboutme.route')
const blogRouter = require('./app/http/routes/blogs.route')

//------------------------ api routes -------------------------------
app.use(apiPrefix + '/users', usersRouter)
app.use(apiPrefix + '/portfolios', portfoliosRouter)
app.use(apiPrefix + '/resumes', resumesRouter)
app.use(apiPrefix + '/aboutme', aboutmeRouter)
app.use(apiPrefix + '/blogs', blogRouter)

module.exports = app

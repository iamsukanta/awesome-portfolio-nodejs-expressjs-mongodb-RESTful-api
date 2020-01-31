const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')

const errorHandler = require('errorhandler');
const mongoose = require('mongoose');
const db = require('./configs/database.config')

// const userDomain = require('./app/models/user');

const app = express();


//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


require('dotenv').config();

//Configure Mongoose
mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })

const apiPrefix = process.env.API_PREFIX

// ------------------ importing route files ------------------------
const usersRouter = require('./app/http/routes/users.route')

//---------------------- api routes -------------------------------
app.use(apiPrefix + '/users', usersRouter)

module.exports = app

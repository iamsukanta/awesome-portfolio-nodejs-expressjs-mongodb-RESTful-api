# Introduction to Uber Service

Uber Service is a online car booking service.



# Tools and Technologies

1. express.js for api
2. mongodb for database

# Installation

1. Install node.js (v>=8.12.0)
2. Clone the repo : git clone ........
3. cd sample-service-api
4. npm install.
5. Copy .env.default and name it .env to set up env variables
5. `npm start`.
6. Run the project by using localhost:<PORT> in the browser address bar.

## Contribution Lines

1. apply es6 syntax
2. assign required modules to a constant- e.g., const express = require('express')
3. name action files with a suffix .action- likewise -  .service, .route, .util, .middleware e.g., users.action.js, users.middleware.js
4. const usersAction = require('./users.action'), const usersRoute = require('./users.route'),
   const usersService = require('./users.service') etc. same will apply to others
5. no special prefix or suffix needed for domain names and constants domains are assigned to. e.g., users = require('./users')



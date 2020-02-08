# Introduction to awesome-nodejs-api-service

This Node Js API service is created for Vue js admin templates. You can download vue js admin template from this link: https://github.com/SukantaBala28/vue-nodejs-admin-template 



# Tools and Technologies I used

1. Node js
2. Express js
3. Json Web Token JWT for user authentication
4. Mongodb for database
5. Mongoose

# Installation Process

1. Install node.js (v>=8.12.0)
2. Clone this repo : git clone https://github.com/SukantaBala28/awesome-nodejs-api-service.git
3. cd awesome-nodejs-api-service
4. npm install.
5. Copy .env.default and name it .env to set up environment variables
5. run `npm start` command
6. You will see your project start like this, in the console: Server Running on http://localhost:3000
6. Run the project by using localhost:3000 in the browser address bar.

## Contribution Lines

1. Apply es6 syntax
2. Assign required modules to a constant- e.g., const express = require('express')
3. Name action files with a suffix .action- likewise -  .service, .route, .util, .middleware e.g., users.action.js, users.middleware.js
4. const usersAction = require('./users.action'), const usersRoute = require('./users.route'), const usersService = require('./users.service') etc. same will apply to others
5. No special prefix or suffix needed for domain names and constants domains are assigned to. e.g., users = require('./users')



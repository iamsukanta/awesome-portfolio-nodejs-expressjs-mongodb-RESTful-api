const express = require('express');
const router = express.Router();
const blogsapiAction = require('../actions/blogsapi.action');
const userMiddleware = require('../middlewares/user.middleware.js');
const multer = require('multer');
const fs = require("fs");

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
      if(!fs.existsSync(__dirname +'/../../../public/uploads/blogImg')){
          fs.mkdirSync(__dirname +'/../../../public/uploads/blogImg', 0766, function(err){
              if(err){                            
                  response.send("ERROR! Can't make the directory! \n");
              }
          });
      }
      cb(null, __dirname +'/../../../public/uploads/blogImg')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() +'_'+file.originalname)
  }
});

const upload = multer({storage: imageStorage});

router .get('/', userMiddleware.checkToken, blogsapiAction.list)
    .post('/create', upload.single('banner_img'), userMiddleware.checkToken, blogsapiAction.create)

module.exports = router

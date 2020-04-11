const express = require('express')
const router = express.Router()
const aboutmeAction = require('../actions/aboutmeapi.action')
const userMiddleware = require('../middlewares/user.middleware.js');

const multer = require('multer');
const fs = require("fs");

const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(!fs.existsSync(__dirname +'/../../../public/uploads/aboutImg')){
            fs.mkdirSync(__dirname +'/../../../public/uploads/aboutImg', 0766, function(err){
                if(err){                            
                    response.send("ERROR! Can't make the directory! \n");
                }
            });
        }
        cb(null, __dirname +'/../../../public/uploads/aboutImg')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() +'_'+file.originalname)
    }
});

const upload = multer({storage: imageStorage});

router.get('/', userMiddleware.checkToken, aboutmeAction.list)
.post('/create', upload.single('image'), userMiddleware.checkToken, aboutmeAction.create)

module.exports = router


const express = require('express');
const router = express.Router();
const multer = require('multer');
const{home}=require('../controllers/homecontroller');
const{upload,view,deletefile}=require('../controllers/filecontroller');
const uploadfile = multer({ dest: 'uploads/files'})
router.get('/',home);
router.post('/upload', uploadfile.single('file') ,upload);
router.get('/view/:id', view);
router.get('/delete/:id',deletefile);

module.exports = router;
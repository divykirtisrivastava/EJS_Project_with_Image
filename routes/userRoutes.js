const express = require('express')
const userController=require('../controller/userController.js')
const router=express.Router()
const uploads = require('../multerConfig.js')

router.get('/',userController.homePage)

router.post('/', uploads.single('image'),userController.saveData)
// router.get('/login',userController.getLogin)
// router.post('/login',userController.getWelcome)
// router.get('/welcome',userController.welcomePage)

module.exports=router
// const express = require('express')
// const UserController = require('../controllers/Usercontroller')

// const router = express.Router()

// router.post('/login',UserController.userlogin)
// router.post('/reg',UserController.userRegister)













// module.exports=router

const express=require('express')

const UserController=require('../controllers/Usercontroller')
const ProjectController=require('../controllers/ProjectControll')


const router= express.Router() //used for creating a instance instance means eg:car is a object and red car is a instance 

const jwtmiddle=require('../Middlewares/jwtMiddleware')
const multermiddleware = require('../Middlewares/multerMiddleWareController')


//user
 router.post('/login',UserController.userlogin)
 router.post('/reg',UserController.userRegister)
 router.put('/updateprofile',jwtmiddle,multermiddleware.single("profile"),UserController.profileupdate)


//Add Project

 router.post('/addProject',jwtmiddle,multermiddleware.single("image"),ProjectController.addProject)
 router.get('/allProject',ProjectController.allProject)
 router.get('/userprojects',jwtmiddle,ProjectController.userProject)
 router.get('/getProject/:id',jwtmiddle,ProjectController.getProjectwithId)
 router.delete('/deleteProject/:id',jwtmiddle,ProjectController.deleteProject)
 router.put('/editProject/:id',jwtmiddle,multermiddleware.single("image"),ProjectController.updateProject)










module.exports=router
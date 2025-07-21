// const users = require("../Model/usermodals")

// exports.userlogin= async (req,res)=>{
//    try{
//     const {email,password}=req.body
//     const existing =await users.findOne({email,password})
//     console.log(existing)
//     if(existing){
//         res.json(existing).status(200)
//     }
//     else{
//         res.json("invalid email or password").status(406)
//     }
//    }
//    catch(e){
//         res.json(e).status(400)
//    }
// }

// exports.userRegister = async(req,res)=>{
//     try{
//         const {username ,email ,password}= req.body
//         const existing = await users.findOne({email,username})
//         console.log(existing)
//         if(existing){
//             res.json("user already exists").status(406)
//         }
//         else{
//             const newUser = new users({email,username,password,linkdin:"",profile:"",github:""})
//             await newUser.save()

//             res.json("user signup completed ").status(201)
//         }
//     }
//     catch(e){
//         console.log(e)
//         res.json(e).status(404)
//     }
// }

const users = require('../Model/usermodels')
const jwt=require('jsonwebtoken')


exports.userlogin = async (req, res) => {
   try{
    const { email,password } = req.body
    const existing = await users.findOne({email,password})    
    if(existing){
        const token=jwt.sign({userId:existing._id},process.env.SECRETKEY)
        res.status(200).json({token,user:existing.username,profile:existing.profile,github:existing.github,linkdin:existing.linkdin})
    }
    else{
        res.status(406).json("Invalid Username or Password")
    }
   }
   catch(e){
    res.status(400).json(e)
   }
}

exports.userRegister = async (req, res) => {
    try {
        const { username, password, email } = req.body
        const existing = await users.findOne({ email })
        // console.log(existing);
        if (existing) {
            res.status(406).json("User Already Exists!!")
        }
        else {
            const newUser = new users({ email, username, password, linkedin: "", github: "", profile: "" })
            await newUser.save()
            console.log(newUser);
            res.status(201).json("User SignUp Completed !!")
        }
    }
    catch (e) {
        console.log(e);
        res.status(404).json(e)
    }
}

exports.profileupdate =async(req,res)=>{
    try{
        userId=req.payload
        if(req.file){
            var {username,github,linkdin} = req.body
            var profile = req.file.filename
        }
        else{
            var {username ,github,linkdin,profile} = req.body
        }
        const response = await users.findByIdAndUpdate(userId,{username,profile,github,linkdin})
        res.status(200).json(response)
    }
    catch (e) {
        console.log(e)
        res.status(404).json(e)
    }
}
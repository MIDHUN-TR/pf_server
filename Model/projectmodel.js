// const mongoose = require("mongoose")

// const projectSchema = mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description:{
//          type: String,
//         required: true
//     },
//     languages:{
//          type: String,
//         required: true
//     },
    
// })

const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    languages:{
        type:String,
        require:true
    },
    gitrepo:{
        type:String,
        require:true,
        unique:true
    },
    demo:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        required:true
    }
})

const projects=mongoose.model("projects",projectSchema)

module.exports=projects
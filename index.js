require("dotenv").config() //configuring dotenv package to
//server for loading env variables to proccess.env
const express = require('express')//importing express 
const cors = require("cors")
const router = require("./Routes/route")
require('./Connect/dbconnect')

const server = express() // creating a server app

server.use(cors()) // cors() returns cors middleware and use configure it 
server.use(express.json()) // configuring json middleware to 
// convert json format into native format
server.use(router)

server.use('/projectimg',express.static("./uploads"))


const PORT = 3000 || process.env.PORT

server.listen(PORT, () => {
    console.log("server running at:", PORT)
})
// server.use("/demo",(req,res)=>{
//     res.send('request hit')
//     res.end()
// })
// server.get('/demo/:id',(req,res)=>{
//     console.log(req.params.id)
//     res.send('Get request Hit')
//     res.end()
// })

// server.post('/postreq',(req,res)=>{
//     console.log(req.query)
//     console.log(req.body)
//     res.send('Post reuest hit')
//     res.end()
// })

// server.put('/putreq',(req,res)=>{
//     res.send('put request sended')
// })

// server.delete('/deletreq',(req,res)=>{
//     res.send('delete request send')
//     res.end()
// })
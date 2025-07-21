const mongoos = require("mongoose")

mongoos.connect(process.env.DBconnect).then((res)=>{
    console.log('server connected with MongoDB-Atlas')
}).catch(err=>{
    console.log(err)
})
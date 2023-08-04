const express = require("express")
const app = express();


/*
get -fetch
post- insert
put/patch-update
delete
*/

//creating todos api
app.get("/todos",(req,res)=>{
    res.send([{title:"css",status:false},{},{}]
    )
})

app.listen(8000,()=>{
    console.log("server is started");
})
import key from "./constants.js"
import axios from "axios"
import express from "express"

//creating express server
const app = express()
app.use(express.static("public"))

//getting home route
app.get("/",(req,res)=>{
    res.render("index.ejs")
})




//listening to port 3000
app.listen(3000)
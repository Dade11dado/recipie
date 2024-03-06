import key from "./constants.js"
import axios from "axios"
import express from "express"

//creating express server
const app = express()
app.use(express.static("public"))

//getting home route
app.get("/",async(req,res)=>{
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=1`)
    console.log(response.status)
    res.render("index.ejs",{
        recipies:response.data
    })
})




//listening to port 3000
app.listen(3000)
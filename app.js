 const express = require("express")
 const app = express()

 const personas= [
    {
        nombre:"pepe",
        eddad:"21"
    },
    {
        nombre:"pepa",
        eddad:"45"
    }
 ]



app.get("/",(req,res)=>{
    res.send("hola mundo!!")
})

app.get("/personas", (req,res)=>{
    res.send(personas);
})

 app.listen(3000)
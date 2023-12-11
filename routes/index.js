const express=require("express")
const router = express.Router()
 

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



router.get("/personas", (req,res)=>{
    res.send(personas);
})

module.exports = router;
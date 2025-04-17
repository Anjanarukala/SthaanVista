const express =require("express");
const router=express.Router();

//users
//Index-users
router.get("/",(req,res)=>{
    res.send("GET for users");
})
//Show-users
router.get("/:id",(req,res)=>{
    res.send("GET for show users");
})

//POST-users
router.post("/",(req,res)=>{
    res.send("post for users");
})

//Delete-users
router.delete("/:id",(req,res)=>{
    res.send("delete for  users");
})
module.exports= router;
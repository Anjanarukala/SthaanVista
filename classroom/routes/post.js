const express =require("express");
const router=express.Router();

//post
//Index
router.get("/",(req,res)=>{
    res.send("GET for posts");
})
//Show
router.get("/:id",(req,res)=>{
    res.send("GET for show posts");
})

//POST
router.post("/",(req,res)=>{
    res.send("post for posts");
})

//Delete
router.delete("/:id",(req,res)=>{
    res.send("delete for  posts");
})
module.exports=router;
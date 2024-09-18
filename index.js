import express from "express";
//importing space





//declaration/initialization
const app = express();
const Port = 4000;

//middleware
app.use(express.json())

//routs
app.get('/',(req,res)=>{
    //res.status(200).json({message:"Hi All welcom"})
    res.status(200).send("Hi All Welcome")

})




//running port
app.listen(Port,()=>{
    console.log(`The app is host port ${Port}`);
    
})

import express, { json } from "express";
import cors from "cors";
import "dotenv/config";

const app=express();
const port=process.env.PORT;
app.use(express.json({limit:"16kb"}));
app.use(cors({origin:"*"}));

app.listen(port,(err)=>{
    if(!err){
        console.log("server running on port : "+port);
        return ;
    }
    console.log("error starting server : "+err);

})
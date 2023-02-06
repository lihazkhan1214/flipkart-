import express from "express";

const app=express();
import Connection from "./database/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import DefaultData from "./defaulData.js";
import router from "./routes/router.js";

const port=8000;
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(router);

Connection(process.env.url);
app.listen(port,()=>{
    console.log("server is runing");
});
DefaultData();




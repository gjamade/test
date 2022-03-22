import express from "express";
import bodyParser from "body-parser";
import ViewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from'./config/connectdb'
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

ViewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;

app.listen(port, ()=>{
    console.log("Back-end Nodejs i running on the port: "+ port)
})



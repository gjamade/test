import express from "express";
import req from "express/lib/request";
import res from "express/lib/response";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/',(req, res0) =>{
        return res.send('Hello World')
    })
    return app.use ("/", router);
}
module.exports = initWebRoutes;
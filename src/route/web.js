import express from "express";
import req from "express/lib/request";
import res from "express/lib/response";
import homecontroller from "../controllers/homecontroller";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homecontroller.gethomepage);
    router.get('/HoiGiangtn', (req, res) =>{
        return res.send('Hello Giang');
    
    });
    router.get('/about123', homecontroller.getaboutpage);
    return app.use ("/", router);
}
module.exports = initWebRoutes;
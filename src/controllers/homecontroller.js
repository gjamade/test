import db from '../models/index'
let gethomepage = async(req,res) =>{
    try{
        let data = await db.User.findAll()
        console.log("--------------------------------")
        console.log(data)
        console.log("--------------------------------")

        return res.render('homepage.ejs', {
            data: JSON.stringify(data),
        })
    }
    catch(e){
        console.log(e);
    }

}
let getaboutpage = (req,res) =>{
return res.render('test/about.ejs')
}
module.exports ={
    gethomepage:gethomepage,
    getaboutpage:getaboutpage,
}


let gethomepage = (req,res) =>{
return res.render('homepage.ejs')
}
let getaboutpage = (req,res) =>{
return res.render('test/about.ejs')
}
module.exports ={
    gethomepage:gethomepage,
    getaboutpage:getaboutpage,
}
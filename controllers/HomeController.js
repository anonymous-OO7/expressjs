
const {join} = require('path');

const HomeController = (req,res) =>{

    
    // res.send("HOME PAGE");

    // res.sendFile("/Users/apple/Desktop/MACDATA/ExpressJs/expressJs/views/index.html");
    const data = {
        'name' : "Gaurav Kumar Yadav"
    }
    
    console.log(join(process.cwd() , 'views' , 'index.ejs'));
    res.render('index.ejs' , data);
    // res.sendFile(join(process.cwd() , 'views' , 'index.ejs'));

}

module.exports = HomeController;
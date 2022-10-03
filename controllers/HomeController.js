
const {join} = require('path');

const HomeController = (req,res) =>{

    
    // res.send("HOME PAGE");

    // res.sendFile("/Users/apple/Desktop/MACDATA/ExpressJs/expressJs/views/index.html");
    
    console.log(join(process.cwd() , 'views' , 'index.html'));
    res.sendFile(join(process.cwd() , 'views' , 'index.html'));

}

module.exports = HomeController;
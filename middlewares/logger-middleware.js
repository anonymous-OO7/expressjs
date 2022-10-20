let Logger = (req , res , next) =>{

    console.log("Logged in with logic");

    next();
}


module.exports = Logger;



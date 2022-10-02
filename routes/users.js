const express = require('express');
const router = express.Router();




router.get("/" , (req, res) =>{

    res.send("USER ROUTER zlist");
});


router.get("/new" ,(req ,res) =>{

    res.send("NEW USER ROUTER");

});
router.get("/:id" , (req,res) =>{


    res.send(`USER HAS ID ${req.params.id}`);
});


router.route("/:id").get((req,res) => {

    res.send("GET REQUEST SENT" `USER HAS ID ${req.params.id}`);
}).put((req,res) =>{

    res.send( `USER HAS ID  GOT A PUR REQUEST ${req.params.id}`);
}).delete((req,res) => {

    res.send( `USER HAS ID GOT  DELETE ReQUeST ${req.params.id}`);
});



router.param("id" ,(req,res,next,id) =>{

    console.log(id);
    next();

})


module.exports = router;

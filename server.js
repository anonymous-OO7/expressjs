console.log("HELLO GAURAV");

const express = require('express');
const app = express();

app.listen(8000);

app.get('/' , (req , res) => {

    console.log("HERE INSENDINGG RESPONSE");
    res.status(200).send("HELOO SERVER ERROR");
    // res.send("HHAAHHAH RESPONSE SENT");
});

const userRouter = require('./routes/users');

app.use('/users' ,userRouter);

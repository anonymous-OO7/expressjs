console.log("HELLO GAURAV");

const express = require('express');
const app = express();
const {join}  = require('path');
const port  = process.env.PORT || '3000';

const userRouter = require('./routes/users');
const WebRouter = require('./routes/WebRouter');


//static

app.use(express.static( join(process.cwd(), 'public')));


// app.listen(8000);


app.use('/users' ,userRouter);
app.use('/web', WebRouter);



app.get('/' , (req , res) => {

    console.log("HERE INSENDINGG RESPONSE");
    // res.status(200).send("HELOO SERVER ERROR");
    res.send("HHAAHHAH RESPONSE SENT");
});



app.listen(port ,() =>{

    console.log(`server listening at http://localhost:${port} `);
});



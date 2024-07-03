const express = require('express')
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser'); 
const { use } = require('react');

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Check cookies for the user's name in the backend
app.get('/myName',(req, res)=>{
    if (Object.keys(req.cookies).length === 0){
        res.send('No cookie')
    }
    else{
        res.send(Object.keys(req.cookies));
        console.log('有cookie',Object.keys(req.cookies));        
    }
    // console.log('test',req.cookies);
    // res.send('Check your console'+`${Object.keys(userCookie)}`);
})

//Save the user's input in the cookie
app.get('/trackName',(req, res)=>{
    //將input存入cookie
    if (req.query.name){ 
        res.cookie(req.query.name);
        // res.send('Yeah🎉🎉 Welcome Here, '+ `${Object.keys(req.cookies)}`);
        res.redirect('/myName.html');
    }
    else{
        res.send('Lack of Parameter');
    }
})

app.get('/getData', (req, res) => {
    if (!req.query.number) {
        res.send("Lack of Parameter");
    }
    else{
        const number = Number(req.query.number,10);
        // const number = parseInt(req.query.number,10);
        console.log(number);
        if (isNaN(number)){
            res.send('Wrong Parameter');
        }
        else{
            let result = (1+number)*number/2;
            res.send(`${result}`);
        }
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'));

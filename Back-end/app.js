const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// Sapp.use(bodyParser.urlencoded({extended:true}));
 app.use(express.json({ extended: false}))
// <---------------------------connection---------------------------------> 
mongoose.connect('mongodb+srv://vijay:vijay1997@vue-poc1-bnq3v.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
});
// <----------------------------schema------------------------------------->
const pocSchema = new mongoose.Schema({
    name:String,
    password:String
})
// <---------------------------------Model-----------------------------------> 
const Poc = mongoose.model('Poc',pocSchema)
// const data = {
//     name: 'vijay',
//     password: '123'
// }

// Poc.create(data,(err,res)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(res)
//     }
// })

app.get('/', (req,res)=>{
    res.send('sending from back end')
});

app.get('/index',(req,res)=>{
    res.send("json from data API");
})
app.post('/username', (req, res) => {
    // res.json(req.body.username)
     console.log(req.body)
    //res.json(req.body.user)
   // console.log(res.json(req.body.user));
})
app.listen(3001,()=>{
    console.log("server running");
})
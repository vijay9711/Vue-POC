const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// Sapp.use(bodyParser.urlencoded({extended:true}));
app.use(express.json({ extended: false }))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// <---------------------------connection---------------------------------> 
mongoose.connect('mongodb+srv://vijay:vijay1997@vue-poc1-bnq3v.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
// <----------------------------schema------------------------------------->
const signUpSchema = new mongoose.Schema({
    first_name: String,
    last_name:String,
    password: String,
    email:String,
    phone:String,

})
// <---------------------------------Model-----------------------------------> 
const Vue_poc = mongoose.model('Vue_poc', signUpSchema)
// const data = {
//     first_name: "vijay",
//     last_name:"vj",
//     password: "vijay",
//     email:"vijay@gmail",
//     phone:"23124134",

// }

// Vue_poc.create(data,(err,res)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(res)
//     }
// })

app.get('/', (req, res) => {
    res.send('sending from back end')
});

app.get('/index', (req, res) => {
    console.log("index")
    res.send("json from data API");

})
app.post('/username', (req, res) => {
    // console.log(req.body)
    res.send("User add successfully")
    Vue_poc.create(req.body,(err,data)=>{
        if(err){
            throw err
        }
        else{
            console.log(data)
        }
    })
})
app.listen(3001, () => {
    console.log("server running");
})
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// Sapp.use(bodyParser.urlencoded({extended:true}));
app.use(express.json({ extended: false }))
app.use(function (req, res, next) {
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
    last_name: String,
    password: String,
    email: String,
    phone: String,

})
// <---------------------------------Model-----------------------------------> 
const User_details = mongoose.model('User_details', signUpSchema)
// const data = {
//     first_name: "vijay",
//     last_name: "vj",
//     password: "vijay",
//     email: "vijay@gmail",
//     phone: "23124134",

// }

// User_details.create(data, (err, res) => {
//     if (err) {
//         throw err;
//     }
//     else {
//         console.log(res)
//     }
// })
const index = '/index'

app.get('/', (req, res) => {
    res.send('sending from back end')
});

app.get(index, (req, res) => {
    console.log(req.body)
    User_details.find()
})
app.post('/username', (req, res) => {
    // console.log(req.body)
    res.send("User add successfully")
    User_details.create(req.body, (err, data) => {
        if (err) {
            throw err
        }
        else {
            console.log(data)
        }
    })
})
app.listen(3001, () => {
    console.log("server running");
})
const express = require('express')
const app = express()
const ejs = require('ejs')


app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))

app.get('/index', (req,res)=>{
    res.render('index', {data:{fName:"First Name", lName: "Last Name", Email: "Email"}})
})

app.all("/results", (req,res)=>{
    var userData = [{fName: req.body.fName, lName: req.body.lName, email: req.body.email}]
    res.render('results', {userData: userData})
})

app.listen(3000, ()=>{
    console.log("Running on port 3000")
})
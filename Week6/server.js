// (must be in mongoDB bin folder to run command).\mongod.exe --dbpath="Path where it should be stored(create folder)"
//use new terminal to run db

const express = require('express')
const hbs = require('hbs')
const app = express()

require('./db/mongoose/mongoose.js')

let User = require('./db/models/user')

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    res.render('index.hbs')
})

app.post('/results', (req,res)=>{

    let user = new User(req.body)

    user.save().then(function(){
        res.render('results.hbs', {name:req.body.name, email:req.body.email})
    }).catch(function(e){
        res.status(400).send(e)
    })

    
})

app.listen(3000, ()=>{
    console.log("Running on port 3000")
})


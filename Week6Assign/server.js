const express = require('express')
const hbs = require('hbs')
const app = express()

require('./db/mongoose/mongoose.js')

let Employee = require('./db/models/employee')

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/view/partials')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))

app.get('/index', (req,res)=>{
    res.render('index.hbs')
})

app.post('/results', (req,res)=>{

    let employee = new Employee(req.body)

    employee.save().then(function(){
        res.render('results.hbs', {fName:req.body.fName, lName:req.body.lName, department:req.body.department, startDate:req.body.startDate, jobTitle:req.body.jobTitle, salary:req.body.salary})
    }).catch(function(e){
        res.status(400).send(e)
    })
    
})

app.get("/view", (req,res)=>{   

    Employee.find({},function (err,emp){
        res.render('view.hbs', {emp: emp})
    })   
})

app.post("/update", (req,res)=>{
    res.render('update.hbs', {rowIdUp:req.body.rowIdUp})
})

app.post("/updateComp", (req,res)=>{
    Employee.updateOne({_id:req.body.id}, {$set: {fName:req.body.fName, lName:req.body.lName, department: req.body.department, startDate: req.body.startDate, jobTitle: req.body.jobTitle, salary: req.body.salary}}, function(err,res){

    }).catch(function(e){
        res.status(400).send(e)
    })
    res.render('updateComp.hbs')

})

app.get('/update', (req,res)=>{
    res.render("update.hbs")
})

app.post("/delete", (req,res)=>{
    Employee.deleteOne({_id:req.body.rowIdDel}, function(err,res){
    }).catch(function(e){
        res.status(400).send(e)
    })
    res.render("delete.hbs")
})

app.get('/delete', (req,res)=>{
    res.render("delete.hbs")
})


app.listen(3000, ()=>{
    console.log("Running on port 3000")
})
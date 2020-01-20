var express = require("express")
var path =  require("path")
var hbs = require("hbs")

var app = express()

hbs.registerPartials(__dirname + 'views/partials')

app.use(express.urlencoded())

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')

app.get("/index", function(req, res){
    res.render("index.hbs", {title: "Assignment Two", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas elementum pellentesque. Vivamus vulputate iaculis justo, vel tempus dui dapibus id. Sed arcu odio, feugiat vel ex nec, iaculis tempus augue. Duis ut volutpat mi. Nullam sed lectus cursus, tempor ex in, faucibus nisi. Cras a sagittis felis, eget molestie velit. Sed gravida risus sed ligula porta, non condimentum ante tristique. Donec ut eleifend velit, sed convallis orci. Nunc placerat ut arcu non consequat. Etiam accumsan id odio venenatis ultricies. Etiam condimentum nulla bibendum accumsan rutrum. Suspendisse nec nunc ex."})

})

app.get("/about", function(req, res){
    res.render("about.hbs", {paraOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas elementum pellentesque. Vivamus vulputate iaculis justo, vel tempus dui dapibus id. Sed arcu odio, feugiat vel ex nec, iaculis tempus augue. Duis ut volutpat mi. Nullam sed lectus cursus, tempor ex in, faucibus nisi. Cras a sagittis felis, eget molestie velit. Sed gravida risus sed ligula porta, non condimentum ante tristique. Donec ut eleifend velit, sed convallis orci. Nunc placerat ut arcu non consequat. Etiam accumsan id odio venenatis ultricies. Etiam condimentum nulla bibendum accumsan rutrum. Suspendisse nec nunc ex.", paraTwo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas elementum pellentesque. Vivamus vulputate iaculis justo, vel tempus dui dapibus id. Sed arcu odio, feugiat vel ex nec, iaculis tempus augue. Duis ut volutpat mi. Nullam sed lectus cursus, tempor ex in, faucibus nisi. Cras a sagittis felis, eget molestie velit. Sed gravida risus sed ligula porta, non condimentum ante tristique. Donec ut eleifend velit, sed convallis orci. Nunc placerat ut arcu non consequat. Etiam accumsan id odio venenatis ultricies. Etiam condimentum nulla bibendum accumsan rutrum. Suspendisse nec nunc ex.", imageOne:"image.jpg"})
})

app.listen(3000, ()=>{console.log("Server Running https://localhost:3000")})
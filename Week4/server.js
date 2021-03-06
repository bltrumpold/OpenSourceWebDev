const express = require('express')
const hbs = require('hbs')
const app = express()

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:false}))

hbs.registerHelper('genTables',(num)=>{

    var str = ''

    str+='<table>'
    str+='<tbody>'
    for(var i = 0; i < num; i++)
    {
        str+='<tr>'
        for(var x = 0; x < num; x++)
        {
            var color = ((1<<24)*Math.random()|0).toString(16);
            str+='<td style="background-color:#' + color + ';">' + color + '<br /><span style="color:#ffffff">' + color + '</span></td>'
           
        }
        str+='</tr>'
    }
    str+='</tbody>'
    str+='</table>'
    return new hbs.handlebars.SafeString(str)
})

hbs.registerHelper('numArray',function(){
    var numArr = [3,4,5,10,20]
    var strOne =""
    for(var i = 0; i < numArr.length; i++)
    {
        strOne+='<option value="'
        strOne+= numArr[i]
        strOne+='">'
        strOne+=numArr[i]
        strOne+='</option>'
    }

    return new hbs.handlebars.SafeString(strOne)
})

hbs.registerHelper('error404',()=>{
    
    var str = ""
    var randoDiv = Math.random() * (50 - 20) + 20
    var tagArr = ['still', 'rotate', 'shrink']

    for(var i = 0; i < randoDiv; i++)
    {
        var randomTag = Math.floor(Math.random() * Math.floor(3))
        str += '<div class="'
        str += tagArr[randomTag]
        str += '">'
        str += '404'
        str += '</div>'
    }

    return new hbs.handlebars.SafeString(str)
})

app.get('/index',(req, res)=>{
    res.render('index.hbs')
})

app.post('/results',(req,res)=>{
    res.render('results.hbs',{formNum:req.body.listNum})
})

app.get("/*", (req,res)=>{
    res.render('error')
})

app.listen(3000, ()=>{
    console.log('Server is running at localhost:3000')
})
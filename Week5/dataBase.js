const mongoDB = require('mongodb')
const MC = mongoDB.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const dbName = 'Test'

//To execute command .\mongod --dbpath=  need to be in mongoDB folder 

MC.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology:true},function(error,client){
    if(error)
    {
        return console.log('Cannot connect to database')
    }

    const db = client.db(dbName)

    try{
        db.collection('users').insertMany(
            [ {firstName:"Brandon", lastName:"Trumpold"},
                {firstName:"Bob", lastName:"Smith"},
                {firstName:"Jon", lastName:"Doe"} ]
        )
    }catch(e){
        console.log(e)
    }
})
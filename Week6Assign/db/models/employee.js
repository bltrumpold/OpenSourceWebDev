const mongoose = require('mongoose')

module.exports = mongoose.model('Empl', {
    fName:{
        type:String,
        required: true
    },
    lName:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }

})



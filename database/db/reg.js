var mongoose=require('mongoose');
var Register=mongoose.model('student',{
    name:{
        type:String
    },
    email:{
        type:String
    },
    pass:{
        type:String
    },
    
    tech:{
        type:String
    },
    add:{
        type:String
    }
    
})
module.exports={Register};
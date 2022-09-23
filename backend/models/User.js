const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
    },
    userPhone:{
        type:Number,
        required:true,
        max: 10
    },
    userWeight:{
        type:Number,
        required:true,
    },
    userHeight:{
        type:Number,
        required:true,
    },
    userGoalWeight:{
        type: Number
    },
    userGoalHeight:{
        type: Number
    },
    userPassword:{
        type: String,
        required: true
    }
});


module.exports=mongoose.model("User",userSchema);
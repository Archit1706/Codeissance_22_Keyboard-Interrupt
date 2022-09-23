const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
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
    userGoalCalorie:{
        type: String,
    },
    userPassword:{
        type: String,
        required: true
    }
});


module.exports=mongoose.model("User",userSchema);
const mongoose=require("mongoose");

const lunchSchema=new mongoose.Schema({
    userEmail:{
        type:String,
        required:true,
    },
    day:{
        type:String,
        required:true,
    },
    calories:{
        type:Number,
        required:true,
    },
    proteins:{
        type:Number,
        required:true,
    },
    fats:{
        type:Number,
        required:true,
    }
});


module.exports=mongoose.model("Lunch",lunchSchema);
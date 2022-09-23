const mongoose=require("mongoose");

const breakfastSchema=new mongoose.Schema({
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


module.exports=mongoose.model("Breakfast",breakfastSchema);
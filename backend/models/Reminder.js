const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    time:{
        //type: //,
        required:true,
    },
    
});


module.exports=mongoose.model("User",userSchema);
const express= require("express");
const mongoose=require("mongoose");
const cors = require("cors");


const app=express();

app.use(express.json());

app.use(cors({ exposedHeaders: "token" }));

app.use(require("./middlewares/auth"));

mongoose.connect("mongodb://localhost:27017/codestormDb",{useNewUrlParser:true},()=>{
    console.log("Connected to Database");
});


app.use("/auth", require("./routes/auth"));
app.use("/meals", require("./routes/meal"));

let port=process.env.PORT;

if(port==null || port==""){
    port=5000;
}
app.listen(port,()=>{
    console.log("Server started on port 5000");
});

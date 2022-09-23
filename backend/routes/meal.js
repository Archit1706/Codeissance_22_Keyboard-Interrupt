const router = require("express").Router();
const Meal = require("../models/Meal");
const axios=require("axios");


router.post("/tasty",async (req, res) => {
    const type=req.body.type;
    const currentUser_id = req.auth.user._id;
    var date=new Date();
    date=date.toLocaleDateString();

    const names=req.body.names;
    var len=names.length;
    var calories=0;
    var proteins=0;
    var fats=0;
    console.log(len);
    // for(var i=0;i<len;i++)
    // {
        console.log("Inside loop")
        const quantity=parseInt(names[0].quantity);
        console.log("after quantity")

        const foodname=names[0].name;
        console.log("after name")
        axios.get('https://api.edamam.com/api/food-database/v2/parser?app_id=f8cd98cc&app_key=eaf494aa7b96b3b7c657d1b62d127369&ingr='+foodname+'&nutrition-type=cooking')
        .then(async function (response) {
            console.log("Inside axios")
            // console.log(response);
            var instancecalories=response.data.parsed[0].food.nutrients.ENERC_KCAL;
            var instanceproteins=response.data.parsed[0].food.nutrients.PROCNT;
            var instancefats=response.data.parsed[0].food.nutrients.FAT;
            instancecalories=instancecalories*quantity;
            instanceproteins=instanceproteins*quantity;
            instancefats=instancefats*quantity;
            calories=calories+instancecalories;
            fats=fats+instancefats;
            proteins=proteins+instanceproteins;
            console.log("Iteration");
            

            // if(i==len-1)
            // {
                console.log("Iteration");
                const newMeal = new Meal({ userid:currentUser_id,date,calories,proteins,fats,type });
                return res.json(await newMeal.save());
            // }
            
            }).catch(function (error) {
                console.log(error);
            });    
    // }
    
    
            
});

// router.post("/profile/changepassword",require("../middlewares/authOnly"),async (req,res)=>{
//     const newpass=req.body.password;
//     const confPass=req.body.confPassword;
//     const user=req.auth.user.username;

//     if(newpass!=confPass) return res.status(400).send("Password and confirm password do not match");
//     try{
//     await User.updateOne({username:user},{password:md5(newpass)});
//     res.send("Successfully changed password");
//     }
//     catch{
//         res.status(400).send("Error occured");    }
// });

// router.post("/search",async (req,res)=>{
//     const search=req.body.search;
//     var foundPosts=await Post.find({});
//     var matchPosts=[];
//     if(foundPosts.length===0){
//         res.send("No posts found");
//     }
//     else{
//         foundPosts.forEach(post => {
//             const lowercaseTitle=post.title.toLowerCase();
//             if(lowercaseTitle.includes(search.toLowerCase())){
//                 matchPosts.push(post);
//             }
//         });
//     }
//     if(matchPosts.length===0)
//     {
//         res.send("Could not find matching posts to your search");
//     }
//     else{
//         res.json(matchPosts);
//     }
// });

// router.post("/deleteblog",require("../middlewares/authOnly"),async (req,res)=>{
//     const requestedBlogID=req.body.blogID;
//     try{
//     res.send(await Post.deleteOne({ _id:requestedBlogID }));
//     }
//     catch{
//         res.status(400).send("Error");
//     }
// });


// router.post("/changepreferences",require("../middlewares/authOnly"),async (req,res)=>{
//     const preferences=req.body.preferences;
//     const user=req.auth.user.username;

//     return res.json(await User.updateOne({username:user},{interests:preferences}));
// });

module.exports = router;


const router = require("express").Router();
const Meal = require("../models/Meal");
const axios=require("axios");
const User = require("../models/User");


router.post("/tasty",async (req, res) => {
    const type=req.body.type;
    const currentUser_id = req.auth.user._id;
    var date=new Date();
    date=date.toLocaleDateString();

    const name=req.body.name;
    const quantity=req.body.quantity;
    var calories=0;
    var proteins=0;
    var fats=0;
    // for(var i=0;i<len;i++)
    // {
        console.log("Inside loop")
        // const quantity=parseInt(names[0].quantity);
        console.log("after quantity")

        // const foodname=name;
        console.log("after name")
        axios.get('https://api.edamam.com/api/food-database/v2/parser?app_id=f8cd98cc&app_key=eaf494aa7b96b3b7c657d1b62d127369&ingr='+name+'&nutrition-type=cooking')
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

router.get("/getmealdetails",async (req,res)=>{
    const type=req.body.type;
    var date=new Date();
    date=date.toLocaleDateString();
    const userid=req.auth.user._id;

    // return res.json(await Meal.findOne({userid:userid,type:type,date:date},{userid:0,date:0,type:0}));
    var collection=await Meal.find({userid:userid,type:type,date:date},{userid:0,date:0,type:0});
    var len=collection.length;
    var calsum=0;
    var prosum=0;
    var fatsum=0;
    for(var i=0;i<len;i++)
    {
        calsum+=collection[i].calories;
        prosum+=collection[i].proteins;
        fatsum+=collection[i].fats;

    }
    res.json({calories:calsum,proteins:prosum,fats:fatsum});
});

router.post("/addcaloriegoal",async (req,res)=>{
    const userid=req.auth.user._id;
    const goal=req.body.goal;
    return res.json(await User.updateOne({_id:userid},{userGoalCalorie:goal}));
});

// router.get("/getworkout",async (req,res)=>{

//     const options = {
//     method: 'GET',
//     url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
//     params: {muscle: 'biceps'},
//     headers: {
//         'X-RapidAPI-Key': '7a9ed61a2cmsh7bed0000139e732p17c74fjsn25ef231e5774',
//         'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
//     }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// });


// router.post("/changepreferences",require("../middlewares/authOnly"),async (req,res)=>{
//     const preferences=req.body.preferences;
//     const user=req.auth.user.username;

//     return res.json(await User.updateOne({username:user},{interests:preferences}));
// });

module.exports = router;


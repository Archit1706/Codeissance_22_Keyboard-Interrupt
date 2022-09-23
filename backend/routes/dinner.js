const router = require("express").Router();
const dinnerSchema = require("../models/Dinner");

router.post("/breakfast", async(res, req)=>{
    try{
        const userDinner = new dinnerSchema({
            userEmail: req.body.email,
            day: req.body.day,
            calories: req.body.calories,
            proteins: req.body.proteins,
            fats: req.body.fats
        })
        const saveDinnerItem = await userDinner.save();
        res.statusCode(200).json(saveDinnerItem);
    }
    catch(err){
        res.json(err);
    }
})
const router = require("express").Router();
const breakfastSchema = require("../models/Breakfast");

router.post("/breakfast", async(res, req)=>{
    try{
        const userBreakfast = new breakfastSchema({
            userEmail: req.body.email,
            day: req.body.day,
            calories: req.body.calories,
            proteins: req.body.proteins,
            fats: req.body.fats
        })
        const saveBreakfastItem = await userBreakfast.save();
        res.statusCode(200).json(saveBreakfastItem);
    }
    catch(err){
        res.json(err);
    }
})
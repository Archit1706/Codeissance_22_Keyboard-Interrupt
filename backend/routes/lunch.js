const router = require("express").Router();
const lunchSchema = require("../models/Lunch");

router.post("/breakfast", async(res, req)=>{
    try{
        const userLunch = new lunchSchema({
            userEmail: req.body.email,
            day: req.body.day,
            calories: req.body.calories,
            proteins: req.body.proteins,
            fats: req.body.fats
        })
        const saveLunchItem = await userLunch.save();
        res.statusCode(200).json(saveLunchItem);
    }
    catch(err){
        res.json(err);
    }
})
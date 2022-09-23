const jwt = require("jsonwebtoken");
const router = require("express").Router();
const User = require("../models/User");
const config = require("../config");
const md5=require("md5");


router.post("/register", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const email=req.body.email;
	const cpassword=req.body.cpassword;
    const phone=req.body.phone;
    const weight=req.body.weight;
    const height=req.body.height;
	

	if (!username || !password || !email || !phone || !weight || !cpassword || !height)
		return res.status(400).send("One or more of the fields are missing.");

	// checking if username exists
	const users = await User.find({ username: username });
	if (users.length > 0) return res.status(400).send("Username is taken");

	//checking for multiple accounts for a single email
	const emailcheck= await User.find({email:email});
	if(emailcheck.length >0) return res.status(400).send("Only one account per email address is allowed");

	if(password!=cpassword) return res.status(400).send("Password and Confirm Password do not match");
	const hash=md5(password);

	const newUser = new User({ username, userPassword:hash, userHeight:height,userWeight:weight,userEmail:email,userPhone:phone });
	return res.json(await newUser.save());
});

router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password)
		return res.status(400).send("Missing email or password");

	// checking if email exists
	const emails = await User.find({ email: email });
	if (emails.length === 0) return res.status(400).send("Email is incorrect");

	const user = emails[0];

	if (user.userPassword !== md5(password)) return res.status(400).send("Incorrect password");

	// sending token
	const token = await jwt.sign(
		{
			id: user._id,
			iat: Math.floor(Date.now() / 1000) + config.tokenLife,
		},
		config.jwtSecret
	);
	res.setHeader("token", token);
	res.json({ token });
});

module.exports = router;

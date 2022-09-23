import React from "react";
import { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, duration: 1 },
    },
    exit: {
        x: "-100vw",
        transition: { ease: "easeInOut" },
    },
};

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        cpassword: "",
        weight: "",
        height: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const signup = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = user;
        if (name && email && password && cpassword && password === cpassword) {
            try {
                const res = await axios.post(
                    "http://localhost:5000/signup",
                    user
                );
                console.log(res);
                setUser({
                    name: "",
                    email: "",
                    password: "",
                    cpassword: "",
                });
            } catch (err) {
                console.log(err);
            }
        } else {
            alert("Please fill all the details correctly");
        }
    };

    return (
        <motion.div
            class="flex w-screen h-screen content-center justify-center items-center bg-inherit"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div
                className="signup"
                class="w-3/5 items-center text-center rounded-md p-8 bg-slate-100 shadow-lg shadow-indigo-500/50"
            >
                <h1 class="text-3xl font-bold mb-4">Sign Up</h1>
                <div class="grid grid-cols-2 grid-flow-row gap-4">
                    <input
                        class="rounded-md border-gray-200 border-2 outline-none text-black text-base py-2 px-3 my-3 mx-0 w-11/12"
                        type="text"
                        name="name"
                        value={user.name}
                        placeholder="Name"
                        onChange={handleChange}
                    />
                    <input
                        class="rounded-md border-gray-200 border-2 outline-none text-black text-base py-2 px-3 my-3 mx-0 w-11/12"
                        type="tel"
                        name="phone"
                        value={user.phone}
                        placeholder="Phone No."
                        onChange={handleChange}
                    />
                    <input
                        class="rounded-md border-gray-200 border-2 outline-none text-black text-base py-2 px-3 my-3 mx-0 w-11/12"
                        type="email"
                        name="email"
                        value={user.email}
                        placeholder="Email Id"
                        onChange={handleChange}
                    />
                    <input
                        class="rounded-md border-gray-200 border-2 outline-none text-black text-base py-2 px-3 my-3 mx-0 w-11/12"
                        type="password"
                        name="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    <input
                        class="rounded-md border-gray-200 border-2 outline-none text-black text-base py-2 px-3 my-3 mx-0 w-11/12"
                        type="password"
                        name="cpassword"
                        value={user.cpassword}
                        placeholder="Confirm Password"
                        onChange={handleChange}
                    />
                    <input
                        class="rounded-md border-gray-200 border-2 outline-none text-black text-base py-2 px-3 my-3 mx-0 w-11/12"
                        type="number"
                        name="weight"
                        value={user.weight}
                        placeholder="Current Weight"
                        onChange={handleChange}
                    />
                    <input
                        class="rounded-md border-gray-200 border-2 outline-none text-black text-base py-2 px-3 my-3 mx-0 w-11/12"
                        type="number"
                        name="height"
                        value={user.height}
                        placeholder="Current Height"
                        onChange={handleChange}
                    />
                </div>
                <div
                    className="button"
                    onClick={(e) => {
                        signup(e);
                    }}
                    class="bg-violet-700 hover:bg-violet-600 border-2 border-violet-900 text-white font-bold py-1 px-2 rounded my-2 outline-none cursor-pointer text-2xl"
                >
                    Signup
                </div>
                <div>or</div>
                <div
                    className="button"
                    class="bg-violet-700 hover:bg-violet-600 border-2 border-violet-900 text-white font-bold py-1 px-2 rounded my-2 outline-none cursor-pointer text-2xl"
                >
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </motion.div>
    );
};
export default Signup;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

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

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // const login = () => {};
    axios.post("http://localhost:5173/login", user).then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/dashboard";
    });

    return (
        <motion.div
            class="flex w-screen h-screen content-center justify-center items-center bg-inherit"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div
                className="login"
                class="w-96 items-center text-center 
rounded-md p-8 bg-slate-100 shadow-lg shadow-indigo-500/50"
            >
                <h1 class="text-3xl font-bold mb-4">Login</h1>
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
                <div
                    className="button"
                    onClick={login}
                    class="bg-violet-700 hover:bg-violet-600 border-2 border-violet-900 text-white font-bold py-1 px-2 rounded my-2 outline-none cursor-pointer text-2xl"
                >
                    Login
                </div>
                <div>or</div>
                <div
                    className="button"
                    class="bg-violet-700 hover:bg-violet-600 border-2 border-violet-900 text-white font-bold py-1 px-2 rounded my-2 outline-none cursor-pointer text-2xl"
                >
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        </motion.div>
    );
};
export default Login;

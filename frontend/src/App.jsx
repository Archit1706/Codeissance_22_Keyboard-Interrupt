import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import CalorieTracker from "./components/CalorieTracker/CalorieTracker";
import Home from "./pages/Home";
// import { style } from '@mui/system'
import Sidebar from "./components/Sidebar/Sidebar";

const isLoggedin = true;
export default function App() {
    const styles = {
        app: `flex flex-col h-screen w-screen`,
    };
    return (
        <Routes>
            {isLoggedin ? (
                <>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/calorie-tracker" element={<CalorieTracker />} />
                </>
            ) : (
                <>
                    <Route
                        path="/login"
                        element={<Login isLoggedin={isLoggedin} />}
                    />
                    <Route path="/signup" element={<Signup />} />
                </>
            )}
        </Routes>
    );
}
    // localStorage.getItem("token")
    
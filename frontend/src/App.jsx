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
import Recipe from './components/Recipe/Recipe'
// import { style } from '@mui/system'
import Sidebar from "./components/Sidebar/Sidebar";

// const isLoggedin = false;
export default function App() {
    const styles = {
        app: `flex flex-col h-screen w-screen`,
    };

<<<<<<< HEAD
          <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/calorie-tracker" element={<CalorieTracker />} />
              <Route path="/recipe" element={<Recipe />} />
          </Routes>
=======
    return (
        <div className={styles.app}>
            {localStorage.getItem("token") ? (
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> 2caec33872aa44beebd77bb790bc85c19937c871

                        <Route path="/signup" element={<Signup />} />
                        <Route
                            path="/calorie-tracker"
                            element={<CalorieTracker />}
                        />
                        {/* <Route path="/recipes" element={<Home />} /> */}
                    </Routes>
                </>
            ) : (
                <>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </>
            )}

            {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        </div>
    );
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import CalorieTracker from './components/CalorieTracker/CalorieTracker' 
import Recipe from './components/Recipe/Recipe'
// import { style } from '@mui/system'
import Sidebar from './components/Sidebar/Sidebar'

const isLoggedin = true;
export default function App() {

    const styles = {
        app: `flex flex-col h-screen w-screen`,
    }
    
  return (
      <div className={styles.app}>
          <Navbar />

          <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/calorie-tracker" element={<CalorieTracker />} />
              <Route path="/recipe" element={<Recipe />} />
          </Routes>

          {/* {
            isLoggedin ? (
        <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calorie-tracker" element={<Dashboard />} />
          </Routes>
            ) : (
                <div>

                </div>
            )
        } */}

          {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      </div>
  );
}

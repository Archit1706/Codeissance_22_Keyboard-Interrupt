import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
      <div>
          <Routes>
              <Route path="/admin" element={<Dashboard />} />
          </Routes>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
  );
}

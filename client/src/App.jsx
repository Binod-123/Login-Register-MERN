import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Home from './Pages/Home'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/sign-in" element={<Signin/>} />
      <Route path="/sign-up" element={<Signup/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

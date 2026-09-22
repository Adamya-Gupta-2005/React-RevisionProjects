import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import { ThemeProvider } from './theme-context.jsx'

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

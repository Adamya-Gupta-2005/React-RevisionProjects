import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx' 
import ProductDetails from './pages/ProductDetails.jsx'
import ProductListing from './pages/ProductListing.jsx'
import Breadcrumbs from './components/Breadcrumbs.jsx'

const App = () => {

  

  return (
    <BrowserRouter>
      <div className='app'>
        <Breadcrumbs />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<ProductListing />}/>
            <Route path='/products/:id' element={<ProductDetails />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

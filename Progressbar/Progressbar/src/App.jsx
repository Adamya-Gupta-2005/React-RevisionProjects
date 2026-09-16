import React from 'react'
import './App.css'
import ProgressBar from './components/Progressbar.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [value, setValue] = useState(0)

  useEffect(()=> {
    setInterval(() => {
      setValue((val) => val+1)
    }, 100)
  },[])

  return (
    <div className='App'>
      <span>Progress Bar</span>
      <ProgressBar value={value} />
    </div>
  )
}

export default App

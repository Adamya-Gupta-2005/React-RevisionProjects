import React, { useEffect, useState } from 'react'
import './App.css'
import useThrottle from './hooks/use-throttle.js'


const App = () => {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  const throttledHandleResize = useThrottle(handleResize, 2000);

  useEffect(() => {
    window.addEventListener('resize', throttledHandleResize)

    return () => {
      window.removeEventListener('resize', throttledHandleResize)
    }

  },[])

  return (
    <div>
      Window Size: {windowSize.width} x {windowSize.height}
    </div>
  )
}

export default App

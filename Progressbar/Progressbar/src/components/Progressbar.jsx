import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ProgressBar = ({value  = 0}) => {
  const [percent, setPercent] = useState(value)

  useEffect(() => {
    setPercent(Math.min(100, Math.max(0,value)))
  },[value])
  return (
    <div className='progress'>
      <span
      style={{color:percent>49? 'white' : 'black'}} 
      >{percent.toFixed(0)}%</span>
      <div style={{width: `${percent}%`}} 
      role='progressbar'
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={percent.toFixed(0)}
       />
    </div>
  )
}

export default ProgressBar
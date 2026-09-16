import React, { useState } from 'react'
import './App.css'
import useGeneratePassword from './Hooks/generatePassword.js';
import StrengthChecker from './components/StrengthChecker.jsx';

const App = () => {

  const [length, setLength] = useState(4);
  const [checkboxes, setCheckBoxes] = useState([
    { title: 'Add UpperCase', State: false },
    { title: 'Add LowerCase', State: false },
    { title: 'Add Numbers', State: false },
    { title: 'Add Symbols', State: false }])

    const handleCheckboxChange = (i) => {
      const updatedCheckbox = [...checkboxes]
      updatedCheckbox[i].State = !updatedCheckbox[i].State

      setCheckBoxes(updatedCheckbox)
    }

    const {password, errorMsg, generate} = useGeneratePassword()

    const [copy, setCopy] = useState(true)
    
    const handleCopy = () => {
      navigator.clipboard.writeText(password)

      setCopy(false)

      setTimeout(() => {
        setCopy(true)
      }, 1000)
    }


  return (
    <div>
      <div className="container">

        { password && (
          <div className="header">
          <div className="title">{password}</div>
          <button className='copybutton' onClick={() => handleCopy() }>{copy ? "Copy" : "Copied"}</button>
        </div>
        )}

        <div className="charLength">
           <span> 
            <label>Character length</label>
            <label>{length}</label>
           </span>

            <input type="range" min={4} max={20} value={length} onChange={(e) => setLength(e.target.value)} />
         
        </div>

        <div className="checkboxes">
          {checkboxes.map((checkbox, idx) => {
            return (
              <div key={idx}>
                <input
                  type='checkbox'
                  onChange={() => handleCheckboxChange(idx)}
                  checked={checkbox.State}
                />
                <label>{checkbox.title}</label>
              </div>
            )
          })}
        </div>

        { errorMsg && ( <p>{errorMsg}</p> )}

        <StrengthChecker password={password} />

        <button className='generate-btn' onClick={() => generate(checkboxes, length)}>Generate</button>


      </div>
    </div>
  )
}

export default App

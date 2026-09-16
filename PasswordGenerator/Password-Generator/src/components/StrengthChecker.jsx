import React from 'react'

const StrengthChecker = ({password}) => {
    
    const getStrength = (password) => {
        const passLength = password.length
        if(passLength <= 4) return "Very Poor"
        else if(passLength <= 8) return "Weak"
        else if(passLength <= 16) return "Medium"
        else  return "Strong"
    }

    const strength = getStrength(password);

    if(!strength) return <></>

  return (
    <div>
        Strength: {strength}
    </div>
  )
}

export default StrengthChecker

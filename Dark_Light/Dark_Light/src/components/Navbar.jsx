import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../theme-context.jsx'

const Navbar = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div>
            <div  className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/blog" >Blog</Link>
                <Link to="/about" >About</Link>
            </div>
            <div className="mode-switch">
                <label >
                    <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'}/> switch
                </label>
            </div>
        </div>

    )
}

export default Navbar

import React from 'react'
import Home from './Home'
import DashBoard from './DashBoard'
import About from './About'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                        {/* <Home /> */}
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
                        {/* <About /> */}
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : ""}>
                        {/* <DashBoard /> */}
                        Dash Board
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
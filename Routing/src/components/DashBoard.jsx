import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashBoard = () => {
    return (
        <div>
            <h1>Dash Board Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="mock-tests">Mock Tests</Link>
                    </li>
                    <li>
                        <Link to="reports">Reports</Link>
                    </li>
                </ul>
            </nav>
            {/* Outlet for nested routes */}
            <Outlet />
        </div>
    )
}

export default DashBoard
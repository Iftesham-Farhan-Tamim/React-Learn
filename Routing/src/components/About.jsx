import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    function handdleClick() {
        navigate("/dashboard");
    }

    return (
        <div>
            <h1>About Page</h1>
            <button onClick={handdleClick}>
                Move To Dash Board Page
            </button>
        </div>
    )
}

export default About
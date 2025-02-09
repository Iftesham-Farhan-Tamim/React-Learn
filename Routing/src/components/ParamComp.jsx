import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Params: {id}</h1>
        </div>
    )
}

export default ParamComp

// http://localhost:5173/student/abc
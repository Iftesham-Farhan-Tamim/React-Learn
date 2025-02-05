import React from 'react'

function Card(props) {
    return (
        <div>
            <input type="text" onChange={(e) => props.setName(e.target.value)} />
            <p>Name state variable value inside the card : {props.name}</p>
        </div>
    )
}

export default Card
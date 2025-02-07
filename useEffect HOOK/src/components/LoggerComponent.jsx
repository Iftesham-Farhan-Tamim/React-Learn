import React, { useState, useEffect } from 'react'

const LoggerComponent = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count+1);
    }

    // // runs on every render
    useEffect(() => {
      console.log("Component rendered or count changed: ", count);
    });
    
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default LoggerComponent
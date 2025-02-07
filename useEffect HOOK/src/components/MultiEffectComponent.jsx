import React, { useState, useEffect } from 'react'

const MultiEffectComponent = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function handleCount() {
        setCount(count + 1);
    }

    // // side-effect logic will run only when count is changed
    useEffect(() => {
        console.log('Count changed', count);
    }, [count]);

    // // it will run only on first render
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('SetInterval Started');
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
            console.log('Time to stop');
            
        }
    }, [])


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleCount}>Increment Count</button>
            <h2>Second: {seconds}</h2>
        </div>
    )
}

export default MultiEffectComponent
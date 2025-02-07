import React, { useState, useEffect } from 'react'

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    // // it will run only on first render
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("setInterval Started");

            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log("time to stop");
            clearInterval(intervalId);
        };
    }, [])

    return (
        <div>
            <h1>Second: {seconds}</h1>
        </div>
    )
}

export default TimerComponent
import React from 'react'
import { useState, useEffect, useRef } from 'react'

const CounterColor = () => {
    const [count, setCount] = useState(0);
    let val = useRef(0);

    let btnRef = useRef();

    function handleIncrement() {
        val.current = val.current + 1;
        console.log("Value of val: ", val.current);
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("I rendered again");
    })

    function changeColor() {
        btnRef.current.style.backgroundColor = "red";
    }
    return (
        <div>
            <button
                ref={btnRef}
                onClick={handleIncrement}>
                Increment
            </button> <br /> <br />

            <button onClick={changeColor}>
                Change Color of 1st Button
            </button> <br /> <br />

            <div>
                Count: {count}
            </div>
        </div>
    )
}

export default CounterColor
import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // the counter will increase by 4
    const addValue = () => {
        // count = count + 1 // incorrect way to update count
        setCount(prevCounter => prevCounter + 1)
        setCount(prevCounter => prevCounter + 1)
        setCount(prevCounter => prevCounter + 1)
        setCount(prevCounter => prevCounter + 1)
        // setCount(prevCounter => prevCounter + 4);
    }

    const removeValue = () => {
        setCount(prevCount => prevCount - 4);
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-300 p-7 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-gray-700">
                You have clicked
                <span className="text-blue-500 font-bold mx-1">{count}</span>
                times
            </p>
            <div className="flex gap-3 mt-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                    // onClick={() => { setCount(count + 1) }}
                    onClick={addValue}    
                >
                    Click me to +
                </button>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
                    // onClick={() => { setCount(count - 1) }}
                    onClick={removeValue}
                >
                    Click me -
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                    onClick={() => setCount(0)}>
                    Reset to 0
                </button>
            </div>
        </div>
    );
}

export default Counter;

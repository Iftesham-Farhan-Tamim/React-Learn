import React, { useState, useEffect } from 'react'

const ResizeComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        console.log("Event Listener Added");
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener removed");
        };
    }, []);

    return (
        <div>
            <h1>Window width: {windowWidth}px</h1>
        </div>
    )
}

export default ResizeComponent
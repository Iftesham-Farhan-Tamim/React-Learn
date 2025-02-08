import React, { useState, useEffect } from 'react'

const ResizeComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // // runs after the first render
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        console.log("Event Listener Added");
        window.addEventListener("resize", handleResize); // // "resize" is a event listener

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


// // What Happens When You Resize the Window?
// // 1. You resize the window.
// // 2. The resize event fires → calls handleResize.
// // 3. handleResize updates the windowWidth state.
// // 4. Since state changed, React re-renders the component.
// // 5. The new windowWidth value is displayed.


// // Key Points
// // 1. useEffect runs only once ([] dependency array).
// // 2. Event listener added on mount, removed on unmount.
// // 3. Every resize triggers a re-render because setWindowWidth updates state.
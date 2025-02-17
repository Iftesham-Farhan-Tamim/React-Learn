import React from 'react'

const ChildComponent = React.memo((props) => {

    console.log("Child component go re-rendered again");

    return (
        <div>
            <button onClick={props.handleClick}>
                {props.buttonName}
            </button>
        </div>
    )
});

export default ChildComponent
// // React.memo -> wrap -> component -> component
// // The re-render will only happen when the props change, 
// // otherwise, it will not render.

// // if u r sending a function, then react.memo won't be
// // able to save you from re-rendering
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("I am Clicked");
  }

  function handleMouseOver() {
    alert("On mouse hover");
  }

  function handleInputChange(e) {
    // console.log("The value has changed in input");
    console.log("Value till now: ", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Shall I submit the form?");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>

      <br />

      <p onMouseOver={handleMouseOver} style={{ border: "1px solid black" }}>
        I am a Para
      </p>

      <br />

      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App

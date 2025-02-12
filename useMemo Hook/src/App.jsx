import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input])

  return (
    <div>
      <button onClick={handleCount}>
        Increment
      </button> <br /> <br />

      <div>
        Count: {count}
      </div> <br /> <br />

      <input
        type="number"
        placeholder='enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        Double: {doubleValue}
      </div> <br /> <br />
    </div>
  )
}

export default App

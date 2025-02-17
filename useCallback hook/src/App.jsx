import { useState, useCallback } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <div>
      <div>
        Count: {count}
      </div> <br />

      <div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div> <br /> <br />

      <div>
        <ChildComponent
          buttonName="Click me"
          handleClick={handleClick}
        />
      </div> <br /> <br />

      <div>
        <ExpensiveComponent />
      </div>
    </div>
  )
}

export default App

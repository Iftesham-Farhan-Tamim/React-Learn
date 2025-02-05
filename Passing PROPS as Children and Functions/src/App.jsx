import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button text="click me" incrementcount={handleClick}>
        <h1>{count}</h1>
      </Button>

      <Card name="Tamim">
        <h1>This is React JS</h1>
        <p>Hello World</p>
        <p>Practise sets</p>
      </Card>
      <Card>
        Hi There, How Are You
      </Card>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import './App.css'
import LoggerComponent from './components/LoggerComponent';
import TimerComponent from './components/TimerComponent';
import DataFetcher from './components/DataFetcher';
import ResizeComponent from './components/ResizeComponent';
import MultiEffectComponent from './components/MultiEffectComponent';

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // // variation: 1
  // // runs on every render

  // useEffect(() => {
  //   alert("I will run on each render");
  // })
  // // ............................................................................................
  // // variation: 2
  // // that runs on only first render

  // useEffect(() => {
  //   alert("I will run on every first render");
  // }, [])
  // // ............................................................................................
  // // variation: 3
  // // runs only on counter render

  // useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count])
  // // ............................................................................................
  // // variation: 4
  // // multiple dependencies

  // useEffect(() => {
  //   alert("I will run every time when count/total is updated");
  // }, [count, total])
  // // ............................................................................................
  // // variation: 5
  // // with clean up function

  // useEffect(() => {
  //   alert("Count is updated");
  //   return () => {
  //     alert("Count is unmounted from UI");
  //   }
  // }, [count])

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickTotal() {
    setTotal(total + 1);
  }

  return (
    <div>

      {/* <LoggerComponent /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      <ResizeComponent />
      {/* <MultiEffectComponent /> */}


      {/* <button onClick={handleClick}>
        Update count
      </button>
      <br />
      Count is: {count}
      <br />
      <button onClick={handleClickTotal}>
        Update total
      </button>
      <br />
      Total is: {total} */}


    </div>
  )
}

export default App

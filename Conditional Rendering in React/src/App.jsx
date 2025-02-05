import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <LoginBtn />
    )
  }

  return (
    <div>
      <h1>welcome to React JS</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )
  //// ............................................................................................
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )
  //// ............................................................................................
  // if (isLoggedIn) {
  //   return (
  //     <LogoutBtn />
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn />
  //   )
  // }
}

export default App

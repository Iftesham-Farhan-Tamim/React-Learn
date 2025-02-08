import { useState, createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// // step1: Create Context
const UserContext = createContext();
// // step2: Wrap all the child inside a provider
// // step3: Pass value
// // step4: Go inside the consumer and consume

const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "Tamim" });
  const [theme, setTheme] = useState('light');

  return (
    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div id='container' style={{ backgroundColor: theme === 'light' ? 'beige' : 'black' }}>
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
export { UserContext }
export { ThemeContext }
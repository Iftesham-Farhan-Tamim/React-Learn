import { useState } from 'react'
import './App.css'
import UserCard from "./components/UserCard"
import lovepic from "./assets/lovepic.jpeg"
import Maharana from "./assets/maharana.jpg"
import PrithviRaj from "./assets/prithviraj.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <UserCard name="Love Rana" desc="desc1" image={lovepic}
          style={{ borderRadius: "10px" }} />
        <UserCard name="Maharana Pratap" desc="desc2" image={Maharana}
          style={{ "border-radius": "10px" }} />
        <UserCard name="PrithviRaj Chauhan" desc="desc3" image={PrithviRaj}
          style={{ "border-radius": "10px" }} />
      </div>
    </>
  )
}

export default App

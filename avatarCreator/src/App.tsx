import { useState } from 'react'
import './App.css'
import { SERVER } from '../api/fetchAvatar'

function App() {
  const [hash, setHash] = useState("random"); 

  return (
    <>
    <div>
      this is a random avatar
    </div>
    <img src={SERVER + hash} alt="random Avatar" />
    </>
  )
}

export default App

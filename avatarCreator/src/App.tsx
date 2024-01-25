import { useState } from 'react'
import './App.css'
import ShowAvatar from '../modules/ShowAvatar'

function App() {
  const [hash, setHash] = useState("random"); 

  return (
    <>
    <div>
      this is a random avatar
    </div>
    {<ShowAvatar
      generator = {hash}
    />}
    </>
  )
}

export default App

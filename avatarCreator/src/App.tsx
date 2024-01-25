import { useState } from 'react'
import './App.css'
import ShowAvatar from '../modules/ShowAvatar'

function App() {
  const [hash, setHash] = useState("random"); 

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTextValue = formData.get('text') as string;
    setHash(newTextValue);
  }

  console.log(hash);

  return (
    <>
    <div>
      Generate images from any text like this!
    </div>
    {<ShowAvatar
      generator = {hash}
    />}
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <button type="submit" >Let's go!</button>
    </form>
    </>
  )
}

export default App

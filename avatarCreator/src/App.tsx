import { useState } from 'react'
import './App.css'
import ShowAvatar from '../modules/ShowAvatar'

const randomGenerator = Math.random().toString(36).substring(2,7);

function App() {
  const [hash, setHash] = useState(randomGenerator); 
  const [avatarType, setAvatarType] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTextValue = formData.get('text') as string;
    setHash(newTextValue);
  }

  return (
    <>
    <div>
      Generate images from any text like this!
    </div>
    <div>
      {<ShowAvatar
        generator = {hash}
      />}
    </div>
    <div>
      <form onSubmit={handleSubmit}>

        <p>Enter any text and press Enter or use the button below!</p>

        <input type="text" name="text" />

        <p>How should your avatar look like?</p>

        <div className="avatar_check">
          <label>
            <input
              type="radio"
              name="avatarOption"
              value="Robot"
              checked={true}
              className="avatar-check-input"
            />
            Robot
          </label>
        </div>

        <div className="avatar_check">
          <label>
            <input
              type="radio"
              name="avatarOption"
              value="Monster"
              className="avatar-check-input"
            />
            Monster
          </label>
        </div>

        <div className="avatar_check">
          <label>
            <input
              type="radio"
              name="avatarOption"
              value="Robot_Head"
              className="avatar-check-input"
            />
            Robothead
          </label>
        </div>

        <div className="avatar_check">
          <label>
            <input
              type="radio"
              name="avatarOption"
              value="Cat"
              className="avatar-check-input"
            />
            Cat
          </label>
        </div>

        <br />

        <button type="submit" >Let's go!</button>
      </form>
    </div>
    </>
  )
}

export default App

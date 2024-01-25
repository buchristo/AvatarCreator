import { useState } from 'react'
import { SERVER } from '../api/fetchAvatar'

interface ShowAvatarProps {
    generator: string
}

export default function ShowAvatar({generator}: ShowAvatarProps){
    const [adress, setAdress] = useState(generator);

    return <>
        <img src={SERVER + adress} alt="random Avatar" />
    </>
}
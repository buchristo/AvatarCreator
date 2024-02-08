import { useState, useEffect } from 'react'
import { SERVER } from '../api/fetchAvatar'

interface ShowAvatarProps {
    generator: string
    avatarType: string
}

export default function ShowAvatar({generator, avatarType}: ShowAvatarProps){

    useEffect(() => {

    },[generator, avatarType]);

    return <>
        <img src={SERVER + generator + avatarType} alt="random Avatar" />
    </>
}
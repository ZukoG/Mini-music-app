import {useState, useRef, useEffect } from 'react'
import { Song } from '../data/songs'

interface Props {
    currentSong: Song | null
}

export default function Player({ currentSong }: Props) {
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (currentSong && audioRef.current) {
            audioRef.current.play()
        }
    }, [currentSong])

    if (!currentSong) return null

    return (
        <div className='player'>
            <h2>Now Playing: {currentSong.title}</h2>
            <audio ref={ audioRef } src={ currentSong.url } controls />
        </div>
    )
}
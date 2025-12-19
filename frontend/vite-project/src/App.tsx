import { useState } from 'react'
import SongCard from './components/SongCard'
import Player from './components/Player'
import './App.css'

function App() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null)

  return (
    <div className='App'>
      <h1>Vibe Music</h1>
      <div className='song-list'>
        {songs.map((song) => (
          <SongCard key ={song.id} song= {song} onPlay={setCurrentSong} />
        ))}
      </div>
      <Player currentSong={currentSong} />
    </div>
  )
}

export default App

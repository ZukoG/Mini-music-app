import { useEffect, useState } from "react";
import SongCard from "./components/SongCard";
import Player from "./components/Player";
import type { Song } from "./types/songs";
import "./App.css";

function App() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((res) => res.json())
      .then((data) => {
        const transformedSongs: Song[] = data.map((song: any) => ({
          id: song.id,
          title: song.title,
          artist: song.artist ?? "Unknown Artist",
          url: `http://localhost:3000/songs/${song.file}`, //  FIXED
          cover: "/default.jpg",
        }));

        setSongs(transformedSongs);
      })
      .catch((error) => {
        console.error("Failed to fetch songs:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Vibe Music</h1>

      <div className="song-list">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            onPlay={setCurrentSong}
          />
        ))}
      </div>

      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;

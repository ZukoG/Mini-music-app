import type { Song } from '../types/songs'

interface Props {
    song: Song
    onPlay: (song: Song) => void
}

export default function SongCard({ song, onPlay }: Props) {
    return (
        <div className='song-card' onClick={() => onPlay(song)}>
            <img src={song.cover} alt={song.title} />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
        </div>
    )
}
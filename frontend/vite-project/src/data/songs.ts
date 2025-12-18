export interface Song {
    id: number
    title: string
    artist: string
    url: string
    cover: string
}

export const songs: Song[] = [
    {
        id: 1,
        title: 'Song One',
        artist: 'Artist A',
        url: '/audio/song1.mp3',
        cover: '/assets/cover1.jpg',
    },
    {
        id: 2,
        title: 'Song Two',
        artist: 'Artist B',
        url: '/audio/song2.mp3',
        cover: '/assets/cover2.jpg',
    },
]
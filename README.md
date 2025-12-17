# Mini Music Streaming App - Backend

## Project Description
This is the backend for a simple music streaming app.  
It serves a list of songs in JSON format and allows users to request MP3 files directly.  
This project is part of a portfolio project to learn full-stack development with Node.js and Express.

## Features
- Returns a JSON list of songs at `/songs`
- Serves MP3 files via `/songs/:filename`
- Simple Express server running on port 3000

## Folder Structure
backend/
├── server.js # Main server file
├── songs/ # Folder containing MP3 files
├── songs.json # Metadata for songs
├── package.json # Node dependencies


## How to Run
1. Clone the repo:
   git clone <your-repo-url>
2. cd music-app/backend
3. npm install
4. node server.js

Notes / Future Work

Add frontend with React to browse songs and play them

- Add authentication (signup/login)

- Add playlists or liked songs

- Add progress bar and UI styling

// Common JS to import Express. Require imports the Express library from node_modules.
// express becomes a function you can use to create a server
const express = require('express');

// Calls the Express function
// Creates an Express application instance
// app represents your web server
const app = express()

const array = [
    {id: 1, title: 'Song one', artist: 'Artist A', file: 'Drake_-_Small_Town_Fame.mp3'},
    {id: 2, title: 'Song two', artist: 'Artist B', file: 'Lil_Wayne_-_No_Worries_Feat._Detail_(mp3.pm).mp3'},
    {id: 3, title: 'Song three', artist: 'Artist C', file: 'Sweatshop Freestyle - A-Reece.mp3'}
];

// Create a route to get the songs.
app.get('/songs' , (req, res) => {
    res.json(array);
});


const path = require('path'); // Node module to handle file paths
app.get('/songs/:filename', (req, res) => {
    const filename = req.params.filename; // get the requested file from URL
    const fullPath = path.join(__dirname, 'songs', filename); // build full path to file
    res.sendFile(fullPath); // send the MP3 file to the client
});


// Starts the server
// Tells Node.js to listen to incoming requests
// 3000 is thee port number
// Port = a 'door' on your computer. You're opening door 3000
app.listen(3000, () => {
    console.log('Server running on port 3000')
});
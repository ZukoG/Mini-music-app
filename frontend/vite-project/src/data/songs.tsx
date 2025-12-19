import { useEffect, useState } from "react";

function Songs() {
  // songs will store the array I fetch. Starts empty until backend responds.
  const [songs, setSongs] = useState([]);


  // useEffect with [] means it only runs once when the component is first rendered.
  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((res) => res.json()) //Fetch resolves to a response object. Response.json() parses body text into real JS objects/arrays.
      .then((data) => {
        const transformedSongs = data.map((song) => ({  //used .map() to transform each object
          id: song.id,
          title: song.title,
          url: `http://localhost:3000/songs/${song.file}`,
          cover: "/default.jpg",
        }));

        setSongs(transformedSongs); //Triggers re-render to UI updates.
      })
      .catch((error) => {
        console.error("Failed to fetch songs:", error);
      });
  }, []);

  return (
    <div>
      <h1>Songs</h1>

      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Songs;


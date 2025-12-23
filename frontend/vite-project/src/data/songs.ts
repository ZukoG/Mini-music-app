// API Helpers
export async function fetchSongs() {
  const res = await fetch("http://localhost:3000/songs");
  return res.json();
}

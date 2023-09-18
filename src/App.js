import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { Songs } from './Context';
import DataSongs from './data/songs.js.json';
import Playing from './components/Playing';
import { useState } from 'react';
function App() {
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    //check neu tra ve 0 
    if (!song)
      setSong(DataSongs[0])
    else
      setSong(song);
  }
  const [song, setSong] = useState(DataSongs[0])
  return (
    <div className='app'>
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />


        <div className="grid grid-cols-3 bg-slate-700 h-screen-nav-player overflow-hidden">

          <DetailSong />
          <ListSong />

        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;

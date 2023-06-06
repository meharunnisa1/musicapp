import React from "react";
import "./App.css";

const App = () => {
  const songs = [
    {
      id: 1,
      title: "Eyy bidda edhi na adda",
      artist: "DSP",
      src: "https://res.cloudinary.com/digdliiab/video/upload/v1684307725/Eyy-Bidda-Idhi-Naa-Adda---Pushpa_MrSong.In_r1xwr7.mp3",
    },
    {
      id: 2,
      title: "Come on come on",
      artist: "Illey",
      src: "https://res.cloudinary.com/digdliiab/video/upload/v1684325362/Cheap_Thrills_ydrhcr.mp3",
    },
    {
      id: 3,
      title: "Believer",
      artist: "Justin Biber",
      src: "https://res.cloudinary.com/digdliiab/video/upload/v1684325572/Imagine_Dragons_-_Believer_RaaSongs_1_zvutyr.mp3",
    },
    // Add more songs to the array
  ];

  const playSong = (song) => {
    const audioPlayer = document.getElementById("audio-player");
    audioPlayer.src = song.src;
    audioPlayer.play();
  };

  return (
    <div className="music-app">
      <h1 className="headin">Musico</h1>
      <audio id="audio-player" controls></audio>
      <ul className="song-list">
        {songs.map((song) => (
          <li key={song.id} onClick={() => playSong(song)}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

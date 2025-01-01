import { useRef, useState } from "react";

const tracks = [
  {
    title: "Track 1",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Track 2",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    image: "https://via.placeholder.com/150",
  },
];

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicTrack, SetCurrentMusicTrack] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  return (
    <div className="music-player">
      <h1>Music Player</h1>
      <h2>{tracks[currentMusicTrack].title}</h2>
      <img
        src={tracks[currentMusicTrack].image}
        alt={tracks[currentMusicTrack].title}
      />
    </div>
  );
}

export default MusicPlayer;

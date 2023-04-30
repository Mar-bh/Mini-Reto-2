import React, { useEffect, useState } from "react";
import "./styles.scss";

const Sounds = ({someData}) => {
  
  const [data, setData] = useState([]); //useState([""]);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    fetch("/theme/")
      .then((res) => res.json())
      .then((Data) => setData(Data))
      .catch((err) => console.log(err));
    getSoundPreview();
    console.log(previewUrl);
    
  }, []);

  // console.log(data);
  console.log("Sound from landing:  " + someData.sound_name);
  const getSoundPreview = async () => {
    const soundId = someData.sound_source; // Replace with the ID of the sound you want to get the preview for
    const apiKey = "49SUgyFMF5BUbPUEOpunCm4FsSmtCaasFuq0qm3i"; // Replace with your actual API key
    const response = await fetch(`https://freesound.org/apiv2/sounds/${soundId}/`, {
      headers: {
        Authorization: `Token ${apiKey}`
      }
      });
    const data = await response.json();
    // console.log(data);
    const previewUrl = data.previews["preview-hq-mp3"];

    setPreviewUrl(previewUrl);
  };
  
  const handlePlay = () => {
    if (!audio) {
      const newAudio = new Audio(previewUrl);
      newAudio.loop = true;
      setAudio(newAudio);
      setIsPlaying(true);
      newAudio.play();
    } else if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (event) => {
    const value = parseFloat(event.target.value);
    audio.volume = value;
    setVolume(value);
    // console.log(value);
  };

  return (
    <div>
    {/* <button onClick={getSoundPreview}>Get sound preview</button> */}
    <button className="sound" onClick={handlePlay}>{isPlaying ? '||' : '>'}</button>
    <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
    </div>
  );
}


export default Sounds;
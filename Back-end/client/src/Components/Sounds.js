import React, { useState } from "react";


function Sounds() {
  const [previewUrl, setPreviewUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [audio, setAudio] = useState(null); // Add state for the audio element	
  
  const getSoundPreview = async () => {
    const soundId = "1234"; // Replace with the ID of the sound you want to get the preview for
    const apiKey = "49SUgyFMF5BUbPUEOpunCm4FsSmtCaasFuq0qm3i"; // Replace with your actual API key
    const response = await fetch(`https://freesound.org/apiv2/sounds/${soundId}/`, {
      headers: {
        Authorization: `Token ${apiKey}`
      }
});
    const data = await response.json();
    console.log(data);
    const previewUrl = data.previews["preview-hq-mp3"];
    const downloadUrl = data.download;
    console.log(downloadUrl);
    setPreviewUrl(previewUrl);
    setDownloadUrl(downloadUrl);
  };

  const playSound = () => {
    console.log(previewUrl);
    const newAudio = new Audio(previewUrl);
    newAudio.loop = true;
    console.log(newAudio);
    setAudio(newAudio); // Save the audio element to state
    newAudio.play();
  };

  const stopSound = () => {
    if (audio) {
      audio.pause(); // Pause the audio
      audio.currentTime = 0; // Reset the playback position to the beginning
      setAudio(null); // Remove the audio element from state
    }
  };

  return (
    <div>
    <button onClick={getSoundPreview}>Get sound preview</button>
    <button onClick={playSound}>Play sound</button>
    <button onClick={stopSound}>Stop sound</button>
  </div>
  );
}


export default Sounds;

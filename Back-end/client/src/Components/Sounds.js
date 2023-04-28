import React, { useState } from "react";


function Sounds() {
  const [soundUrl, setSoundUrl] = useState("");
  
  const getSoundPreview = async () => {
    const soundId = "1234"; // Replace with the ID of the sound you want to preview
    const apiKey = "49SUgyFMF5BUbPUEOpunCm4FsSmtCaasFuq0qm3i"; // Replace with your actual API key
    const response = await fetch(
      `https://freesound.org/apiv2/sounds/${soundId}/download/?token=${apiKey}`
    );
    const downloadUrl = await response.text();
    setSoundUrl(downloadUrl);
  };

  const playSound = () => {
    const audio = new Audio(soundUrl);
    audio.play();
  };

  return (
    <div>
      <button onClick={getSoundPreview}>Get sound preview</button>
      <button onClick={playSound} disabled={!soundUrl}>
        Play sound
      </button>
    </div>
  );
}


export default Sounds;

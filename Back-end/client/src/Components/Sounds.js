import React, { useState } from "react";


function Sounds() {
  const [previewUrl, setPreviewUrl] = useState("");
  
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
    setPreviewUrl(previewUrl);
  };

  const playSound = () => {
    console.log(previewUrl);
    const audio = new Audio(previewUrl);
    console.log(audio);
    audio.play();
  };
  return (
    <div>
    <button onClick={getSoundPreview}>Get sound preview</button>
    <button onClick={playSound}>Play sound</button>
  </div>
  );
}


export default Sounds;

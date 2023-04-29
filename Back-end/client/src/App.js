//  import './App.css';
// import Window from './Components/styles.scss';
import React from "react";
import Main from './Components/LandingPage';
import Landing from "./Components/LandingPage";

function App() {
  return (
    <div className="App">
      <Main/>
      {/* <Landing/> */}
    </div>
  )
}

export default App;

// import React, { useState } from "react";
// import VolumeButton from './Components/VolumeButton';

// const SoundsConfig = () => {
//   const [volume, setVolume] = useState(50);

//   const handleVolumeChange = () => {
//     const newVolume = volume === 0 ? 100 : 0;
//     setVolume(newVolume);
//   };

//   return (
//     <div>
//       <VolumeButton volume={volume} onClick={handleVolumeChange} />
//     </div>
//   );
// };

// export default SoundsConfig;
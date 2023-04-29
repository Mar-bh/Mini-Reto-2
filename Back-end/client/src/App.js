 import './App.css';
 //import './index.css';
 import './styles.scss';
 import React from "react";
 import Header from './Components/Header';
 import SoundsConfig from './Views/LandingPage';
 import Sounds from './Components/Sounds';

function App() {

  return (
    <div className="App">
      <Header/>
      <Sounds/>
    </div>
  );
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
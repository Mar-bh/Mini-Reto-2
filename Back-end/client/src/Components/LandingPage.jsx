import SoundWindow from "./styles";
import SoundsConfig from "./VolumeButton";
import ThemeWindow from "./ThemesWindow";

import React, { useState, useEffect } from 'react';
import './styles.scss';

function Landing() {

  //cricketsSounds,
  //const [data, setDatos] = useState([]);
  const [data, setDatos] = useState([]);
  const [dataForest, setDatosForest] = useState([]);
  let [temp, setTemp] = useState([]);
  // const [cricketsSounds, setCrickets] = useState([]);
  const [text, setText] = useState('Initial text');

  function handleClick(data) {
    setText(data);
  }

  useEffect(() => {
    fetch('/datos')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error(error));

    fetch('/datosForest')
      .then(response => response.json())
      .then(dataForest => setDatosForest(dataForest))
      .catch(error => console.error(error));
    }, []);
    
    useEffect(() => {
      if (dataForest) {
        setTemp(dataForest);
        console.log("TEMP: ", temp);
      }
    }, [dataForest]);

  return (
  <div className = "background">
    <div className = "main">
      <div className = "fatherContainer">
        <div className = "Title">
          <h1>Working on...</h1>
        </div>
        <div className = "ThemeWindow">
          <div className="container">
            <div className = "Options">
              <button className="buttonToDo" 
                onClick={() => {
                    console.log("Datos: ", data);
                  }}
              >+</button>
            </div>
              <br/>
              <p>Output: {text}</p>
          </div>  
        </div>         
      </div>


      <div className = "fatherContainer2">
        <div className = "Title">
          <h1>Ambience sounds</h1>
        </div>
        <div className = "ThemeWindow2">
          <div className="container">
            <div className = "Options">
              <button className="button"
                onClick={() => {
                    console.log("Datos: ", data);
                  }}
              >Theme</button>
              <button className="button"
                onClick={() => {
                    console.log("Datos: ", data);
                  }}
              >Playlist</button>
            </div>
{/* ---------------------------------------------------------------- */}
            <button className="button"
              onClick={() => {
                  console.log("Datos: ", dataForest);
                  console.log("FOREST");
                  console.log("TEMP: ", temp);
                }}

            >Forest</button>
            <button className="button"
              onClick={() => {
                  console.log("Datos: ", data);
                }}
            >Sea</button>
            <button className="button"
              onClick={() => {
                  console.log("Datos: ", data);
                }}
            >Library</button>
            <button className="button"
              onClick={() => {
                  console.log("Datos: ", data);
                  console.log("COFFEE");
                }}
            >Coffee Shop</button>
          </div>


          <div className = "volume">
            <div className = "col">
              <button className="sound"onClick={() => {
                      console.log("Volumen: ");
                    }}
              >V</button>

              {/* FOREST */}
              <button className="buttonSound"
                onClick={() => {
                    temp = dataForest;
                    console.log(temp[0].sound_name + "sounds", temp[0]);
                    handleClick(temp[0].sound_name);
                    // console.log("Output: ", output);
                  }}
                >{temp[0].sound_name}</button>
                {/* >{temp[0].sound_name ? <p>Sound name: {temp[0].sound_name}</p> : <p>No sound name available</p>}</button> */}

              <button className="play"onClick={() => {
                      console.log("Play: ");
                    }}
              >II</button>
              <button className="sound"onClick={() => {
                      console.log("Volumen: ");
                    }}
              >V</button>
              <button className="buttonSound"
                  onClick={() => {
                      console.log("Leaves sound: ", data[1]);
                      handleClick(data[1].sound_name);
                    }}
              >Leaves</button>
              <button className="play"onClick={() => {
                      console.log("Play: ");
                    }}
              >II</button>
            </div>
            <div className = "col">
              <button className="sound"onClick={() => {
                      console.log("Volumen: ");
                    }}
              >V</button>
              <button className="buttonSound"
                  onClick={() => {
                      console.log("Birds sound: ", data[0]);
                      handleClick(data[0].sound_name);
                    }}
              >Birds</button>
              <button className="play"onClick={() => {
                      console.log("Play: ");
                    }}
              >II</button>
              <button className="sound"onClick={() => {
                      console.log("Volumen: ");
                    }}
              >V</button>
              <button className="buttonSound"
                  onClick={() => {
                      console.log("River sound: ", data[5]);
                      handleClick(data[5].sound_name);
                    }}
              >River</button>
              <button className="play"onClick={() => {
                      console.log("Play: ");
                    }}
              >II</button>
            </div>
            <div className = "col">
              <button className="sound"onClick={() => {
                      console.log("Volumen: ");
                    }}
              >V</button>
              <button className="buttonSound"
                  onClick={() => {
                      console.log("Wind sound: ", data[4]);
                      handleClick(data[4].sound_name);
                    }}
              >Wind</button>
              <button className="play"onClick={() => {
                      console.log("Play: ");
                    }}
              >II</button>
              <button className="sound"onClick={() => {
                      console.log("Volumen: ");
                    }}
              >V</button>
              <button className="buttonSound"
                  onClick={() => {
                      console.log("Datos: ", data[2]);
                      handleClick(data[2].sound_name);
                    }}
              >Rain</button>
              <button className="play"onClick={() => {
                      console.log("Play: ");
                    }}
              >II</button>
            </div>
              <br/>
              <p>Output: {text}</p>
          </div>   

        </div>         
      </div>
    </div>
  </div>
  );
}

export default Landing;


// {/* // import React from "react";
// // // import Table from "../Components/Table";

// // // import { makeStyles } from "@mui/styles";
// // // import { Box } from "@mui/material";

// // const useStyles = makeStyles((theme) => ({ */}
// {/* //   container: { */}
// {/* //     padding: 80
//   },
// }));

// function Configuration() { }

//     const classes = useStyles()
//   return (

//     <Box className={classes.container}>
//         <Table/>
//     </Box>
//   );
// }

// export default Configuration;



// import React, { useState } from "react";
// import VolumeButton from "./VolumeButton";

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

// export default SoundsConfig;*/}

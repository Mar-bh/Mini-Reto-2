// import connection from '../../Server';
import React, { useState, useEffect } from 'react';
import './styles.scss';
//import Button from '@material-ui/core/Button';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';


function App() {

  const [data, setDatos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/datos')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error(error));
  }, []);
  
  return (
  <div className = "background">
    <div className = "fatherContainer">
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
        <button className="button"
          onClick={() => {
              console.log("Datos: ", data);
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
            }}
        >Coffee Shop</button>

        {/* <Button
        className="button"
        variant="outlined"
        color="primary"
        onClick={() => {
            // Acción a realizar al hacer clic en el botón
        }}
        >
        {/* <PlayArrowIcon /> */}
        {/* </Button> */} 

      </div>
      <div className = "volume">
        <div className = "col">
          <button className="sound"onClick={() => {
                  console.log("Volumen: ");
                }}
          >V</button>
          <button className="buttonSound"
              onClick={() => {
                  console.log("Datos: ", data);
                }}
          >Crikets</button>
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
                  console.log("Datos: ", data);
                }}
          >Leafes</button>
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
                  console.log("Datos: ", data);
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
                  console.log("Datos: ", data);
                }}
          >Waterfalls</button>
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
                  console.log("Datos: ", data);
                }}
          >Trees and air</button>
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
                  console.log("Datos: ", data);
                }}
          >Rain</button>
          <button className="play"onClick={() => {
                  console.log("Play: ");
                }}
          >II</button>
        </div>
      </div>           
    </div>
  </div>
  );
}

export default App;

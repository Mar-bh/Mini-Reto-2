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
    <div className = "fatherContainer">
    <div className="container">
      <h1 className="title">Mi Página Web en React con Sass hola</h1>
      <button className="button"
        onClick={() => {
            console.log("Datos: ", data);
            console.log("Hola");
          }}
        >Forest</button>
        <button className="button"
        onClick={() => {
            console.log("Datos: ", data);
            console.log("Hola");
          }}
        >Sea</button>
        <button className="button"
        onClick={() => {
            console.log("Datos: ", data);
            console.log("Hola");
          }}
        >Library</button>
        <button className="button"
        onClick={() => {
            console.log("Datos: ", data);
            console.log("Hola");
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
      <h1 className="title">Mi Página Web en React con Sass hola</h1>
    </div>
    </div>
    
  );
}

export default App;

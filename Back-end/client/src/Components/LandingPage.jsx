import React, { useState, useEffect } from 'react';
import './styles.scss';
import Sounds from "./Sounds";

function Landing() {

  const [data, setDatos] = useState(null);
  const [dataForest, setDatosForest] = useState(null);
  const [dataSea, setDatosSea] = useState(null);
  const [dataCoffee, setDatosCoffee] = useState(null);
  const [dataLibrary, setDatosLibrary] = useState(null);
  let [temp, setTemp] = useState(null);
  const [text, setText] = useState('Initial text');
  const [textbtn1, setTextbtn1] = useState('btn1');
  const [textbtn2, setTextbtn2] = useState('btn2');
  const [textbtn3, setTextbtn3] = useState('btn3');
  const [textbtn4, setTextbtn4] = useState('btn4');
  const [textbtn5, setTextbtn5] = useState('btn5');
  const [textbtn6, setTextbtn6] = useState('btn6');

  const [showTheme, setShowTheme] = useState(true);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const [showP1, setShowP1] = useState(false);
  const [P1,setP1] = useState('');

  const newPlaylist = () => {
    console.log('Button clicked!');
    setP1('Playlist1');
  }

  const configuration = {
    name: '', 
    theme: 1, 
    first_sound: 0,
    first_sound_volume: 0,
    second_sound: 0,
    second_sound_volume: 0,
    third_sound: 0,
    third_sound_volume: 0,
    fourth_sound: 0,
    fourth_sound_volume: 0,
    fifth_sound: 0,
    fifth_sound_volume: 0,
    sixth_sound: 0,
  };

  const [informacion, setInformacion] = useState('');

  function manejarInformacion(datos) {
    setInformacion(datos);
  }

  function handleClick(data) {
    setText(data);
  }

  function handleClickbtn1(data, info) {
    setTextbtn1(data);
  }

  function handleClickbtn2(data, info) {
    setTextbtn2(data);
  }

  function handleClickbtn3(data, info) {
    setTextbtn3(data);
  }

  function handleClickbtn4(data, info) {
    setTextbtn4(data);
  }

  function handleClickbtn5(data, info) {
    setTextbtn5(data);
  }

  function handleClickbtn6(data, info) {
    setTextbtn6(data);
  }
  
  useEffect(() => {   
    fetch('/datosForest')
    .then(response => response.json())
    .then(dataForest => setDatosForest(dataForest))
    .catch(error => console.error(error));
    
    fetch('/datos')
    .then(response => response.json())
    .then(data => setDatos(data))
    .catch(error => console.error(error));
      
    fetch('/datosSea')
      .then(response => response.json())
      .then(dataSea => setDatosSea(dataSea))
      .catch(error => console.error(error));

    fetch('/datosCoffee')
      .then(response => response.json())
      .then(dataCoffee => setDatosCoffee(dataCoffee))
      .catch(error => console.error(error));
    
    fetch('/datosLibrary')
      .then(response => response.json())
      .then(dataLibrary => setDatosLibrary(dataLibrary))
      .catch(error => console.error(error));
    
  }, []);
  
  useEffect(() => {
    console.log("DATA: ", data);
    console.log("DATAFOREST: ", dataForest);
    if (dataForest !== null) {
      temp = dataForest;
      setTemp(dataForest);
      handleClickbtn1(temp[0].sound_name, temp[0]);
      handleClickbtn2(temp[1].sound_name, temp[1]);
      handleClickbtn3(temp[2].sound_name, temp[2]);
      handleClickbtn4(temp[3].sound_name, temp[3]);
      handleClickbtn5(temp[4].sound_name, temp[4]);
      handleClickbtn6(temp[5].sound_name, temp[5]);
      console.log("TEMP: ", temp);
    }
  },[dataForest]);
    

  if (temp !== null) {

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
                    setShowPlaylist(false);
                    setShowTheme(true);
                  }}
                >Theme</button>

                <button className="button"
                  onClick={() => {
                      console.log("Datos: ", data);
                      setShowTheme(false);
                      setShowPlaylist(true);
                    }}
                >Playlist</button>
              </div>
  
              {showTheme && (
                <div className = "Themes">     
                  <button className="button"
                    onClick={() => {
                        temp = dataForest;
                        handleClickbtn1(temp[0].sound_name);
                        handleClickbtn2(temp[1].sound_name);
                        handleClickbtn3(temp[2].sound_name);
                        handleClickbtn4(temp[3].sound_name);
                        handleClickbtn5(temp[4].sound_name);
                        handleClickbtn6(temp[5].sound_name);
                        console.log("Datos Bosque: ", temp);
                      }}
                  >Forest</button>

                  <button className="button"
                    onClick={() => {
                        temp = dataSea;
                        handleClickbtn1(temp[0].sound_name);
                        handleClickbtn2(temp[1].sound_name);
                        handleClickbtn3(temp[2].sound_name);
                        handleClickbtn4(temp[3].sound_name);
                        handleClickbtn5(temp[4].sound_name);
                        handleClickbtn6(temp[5].sound_name);
                        console.log("Datos Oceano: ", temp);
                      }}
                  >Sea</button>

                  <button className="button"
                    onClick={() => {
                        temp = dataLibrary;
                        handleClickbtn1(temp[0].sound_name);
                        handleClickbtn2(temp[1].sound_name);
                        handleClickbtn3(temp[2].sound_name);
                        handleClickbtn4(temp[3].sound_name);
                        handleClickbtn5(temp[4].sound_name);
                        handleClickbtn6(temp[5].sound_name);
                        console.log("Datos Biblio: ", temp);
                      }}
                  >Library</button>

                  <button className="button"
                    onClick={() => {
                      temp = dataCoffee;
                      handleClickbtn1(temp[0].sound_name);
                      handleClickbtn2(temp[1].sound_name);
                      handleClickbtn3(temp[2].sound_name);
                      handleClickbtn4(temp[3].sound_name);
                      handleClickbtn5(temp[4].sound_name);
                      handleClickbtn6(temp[5].sound_name);
                      console.log("Datos Cafe: ", temp);
                    }}
                  >Coffee Shop</button>
                </div>
              )}

              {showPlaylist && (
                <div className = "Playlist">    
                
                  {showP1 && (
                    <fieldset className="buttonPlaylist"
                      onClick={() => {
                          newPlaylist();
                        }}
                    
                    >{P1}</fieldset>
                  )} 
{/* 
                  <button className="buttonPlaylist"
                    onClick={() => {
                        temp = dataSea;

                      }}
                  >Tuesday</button>

                  <button className="buttonPlaylist"
                    onClick={() => {
                        temp = dataLibrary;

                      }}
                  >Wednesday</button>

                  <button className="buttonPlaylist"
                    onClick={() => {
                      temp = dataCoffee;

                    }}
                  >Thursday</button>

                  <button className="buttonPlaylist"
                    onClick={() => {
                      temp = dataCoffee;
                      handleClickbtn1(temp[0].sound_name);
                      handleClickbtn2(temp[1].sound_name);
                      handleClickbtn3(temp[2].sound_name);
                      handleClickbtn4(temp[3].sound_name);
                      handleClickbtn5(temp[4].sound_name);
                      handleClickbtn6(temp[5].sound_name);
                      console.log("Datos Cafe: ", temp);
                    }}
                  >Friday</button> */}



                </div>
              )}

              <div className = "volume">

                <div className = "row">

                    {/* FOREST */}
                    <button className="buttonSound"
                      onClick={() => {
                          // temp = dataForest;
                          console.log(temp[0].sound_name + "sounds", temp[0]);
                          handleClick(temp[0].sound_name);
                          // handleClickbtn1(temp[0].sound_name);
                        }}
                        // >{1 ? <p>Sound name: {temp[0].sound_name}</p> : <p>No sound name available</p>}</button>
                        // >1</button>
                    >{textbtn1}</button> 

                    <button className="buttonSound"
                      onClick={() => {
                          // temp = dataForest;
                          console.log(temp[1].sound_name + "sounds", temp[1]);
                          // <Link to={{ pathname: './Sounds', state: {sound} }} />
                          // handleClickbtn2(temp[1].sound_name);
                        }}
                    // >2</button>
                    >{textbtn2}</button>

                </div>

                <div className = "row">
                  <div className="configuration">
                    <p>Informacion del hijo: {informacion}</p>
                    <Sounds someData={temp[0]} sendDatos={manejarInformacion}/>
                    
                  </div>  
                  {/* <div className="configuration">             
                    <Sounds someData={temp[1]} />
                  </div> */}
                </div>

                {/* <div className = "row">

                    <button className="buttonSound"
                      onClick={() => {
                          // temp = dataForest;
                          console.log(temp[2].sound_name + "sounds", temp[2]);
                          handleClick(temp[2].sound_name);
                          // handleClickbtn3(temp[2].sound_name);
                        }}
                    // >3</button>
                    >{textbtn3}</button>
                    
                    <button className="buttonSound"
                      onClick={() => {
                          // temp = dataForest;
                          console.log(temp[3].sound_name + "sounds", temp[3]);
                          handleClick(temp[3].sound_name);
                          // handleClickbtn4(temp[3].sound_name);
                        }}
                    // >4</button>
                    >{textbtn4}</button>

                </div>
                
                <div className = "row">
                  <div className="configuration">
                    <Sounds someData={temp[2]} />
                  </div>  
                  <div className="configuration">             
                    <Sounds someData={temp[3]} />
                  </div>
                </div>

                <div className = "row">

                    <button className="buttonSound"
                      onClick={() => {
                          // temp = dataForest;
                          console.log(temp[4].sound_name + "sounds", temp[4]);
                          handleClick(temp[4].sound_name);
                          // handleClickbtn5(temp[4].sound_name);
                        }}
                    // >5</button>
                    >{textbtn5}</button>

                    <button className="buttonSound"
                      onClick={() => {
                          // temp = dataForest;
                          console.log(temp[5].sound_name + "sounds", temp[5]);
                          handleClick(temp[5].sound_name);
                          // handleClickbtn6(temp[5].sound_name);
                        }}
                    // >6</button>
                    >{textbtn6}</button>

                </div>
                
                <div className = "row">
                  <div className="configuration">
                    <Sounds someData={temp[4]} />
                  </div>  
                  <div className="configuration">             
                    <Sounds someData={temp[5]} />
                  </div>
                </div> */}

              </div>

              {showPlaylist && ( 

                <div className = "PlaylistOptions">
                  <button className="button"
                    onClick={() => {
                        temp = dataForest;
                        console.log("random data:", temp);
                        console.log("Save");
                        setShowP1(true);
                      }}
                  >Save</button>

                  <button className="button"
                    onClick={() => {
                        temp = dataForest;
                        console.log("random data:", temp);
                        console.log("Edit");
                      }}
                  >Edit</button>

                  <button className="button"
                    onClick={() => {
                        temp = dataForest;
                        console.log("random data:", temp);
                        console.log("Delete");
                      }}
                  >Delete</button>
                </div>
                  
              )}

            </div>   
          </div>         
        </div>
      </div>
    </div>
    );
  }
}

export default Landing;


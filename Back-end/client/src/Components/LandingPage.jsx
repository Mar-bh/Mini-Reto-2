import React, { useState, useEffect } from 'react';
import './styles.scss';
import Sounds from "./Sounds";
import Playlist from "./ToDoList";
import ToDoList from './ToDoList';

function Landing() {

  const [data, setDatos] = useState(null);
  const [dataForest, setDatosForest] = useState(null);
  let [temp, setTemp] = useState(null);
  const [text, setText] = useState('Initial text');

  const [showTheme, setShowTheme] = useState(true);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const [showP1, setShowP1] = useState(false);
  const [P1,setP1] = useState('');

  // const newPlaylist = () => {
  //   console.log('Button clicked!');
  //   setP1('Playlist1');
  // }

  // const configuration = {
  //   name: '', 
  //   theme: 1, 
  //   first_sound: 0,
  //   first_sound_volume: 0,
  //   second_sound: 0,
  //   second_sound_volume: 0,
  //   third_sound: 0,
  //   third_sound_volume: 0,
  //   fourth_sound: 0,
  //   fourth_sound_volume: 0,
  //   fifth_sound: 0,
  //   fifth_sound_volume: 0,
  //   sixth_sound: 0,
  // };

  // const [informacion, setInformacion] = useState('');

  // function manejarInformacion(datos) {
  //   setInformacion(datos);
  // }
  
  useEffect(() => {   
    fetch('/theme/1')
    .then(response => response.json())
    .then(temp => setTemp(temp))
    .catch(error => console.error(error));
    
    fetch('/datos')
    .then(response => response.json())
    .then(data => setDatos(data))
    .catch(error => console.error(error));
    
  }, []);

  const getSoundPreview = async (id) => {
    const response = await fetch(`/theme/${id}`);
    const data = await response.json();
    setTemp(data);
  };
    

  if (temp !== null) {

    return (
    <div className = "background">
      <div className = "main">
        <ToDoList/>
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
                        getSoundPreview(1);
                        console.log("Datos Bosque: ", temp);
                      }}
                  >Forest</button>

                  <button className="button"
                    onClick={() => {
                        getSoundPreview(4);
                        console.log("Datos Oceano: ", temp);
                      }}
                  >Sea</button>

                  <button className="button"
                    onClick={() => {
                        getSoundPreview(2);
                        console.log("Datos Biblio: ", temp);
                      }}
                  >Library</button>

                  <button className="button"
                    onClick={() => {
                      getSoundPreview(3);
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
                          // newPlaylist();
                        }}
                    
                    >{P1}</fieldset>
                  )} 

                </div>
              )}

              <div className = "volume">

                <div className = "row">

                    {/* FOREST */}
                    <button className="buttonSound"
                      onClick={() => {
                          console.log(temp[0].sound_name + "sounds");
                        }}
                    >{temp[0].sound_name}</button> 

                    <button className="buttonSound"
                      onClick={() => {
                          console.log(temp[1].sound_name + " sounds");
                        }}
                    >{temp[1].sound_name}</button>

                </div>

                <div className = "row">
                  <div className="configuration">
                    {/* <p>Informacion del hijo: {informacion}</p> */}
                    <Sounds someData={temp[0]}/>
                    {/* <Sounds someData={temp[0]} sendDatos={manejarInformacion}/> */}
                  </div>  

                  <div className="configuration">             
                    <Sounds someData={temp[1]} />
                  </div>
                </div>

                <div className = "row">

                    <button className="buttonSound"
                      onClick={() => {
                          console.log(temp[2].sound_name + "sounds");
                        }}
                    >{temp[2].sound_name}</button>
                    
                    <button className="buttonSound"
                      onClick={() => {
                          console.log(temp[3].sound_name + "sounds");
                        }}
                    // >4</button>
                    >{temp[3].sound_name}</button>

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
                          console.log(temp[4].sound_name + "sounds");
                          // handleClickbtn5(temp[4].sound_name);
                        }}
                    // >5</button>
                    >{temp[4].sound_name}</button>

                    <button className="buttonSound"
                      onClick={() => {
                          console.log(temp[5].sound_name + "sounds");
                        }}
                    >{temp[5].sound_name}</button>

                </div>
                
                <div className = "row">
                  <div className="configuration">
                    <Sounds someData={temp[4]} />
                  </div>  
                  <div className="configuration">             
                    <Sounds someData={temp[5]} />
                  </div>
                </div>

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


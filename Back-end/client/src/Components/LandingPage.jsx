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

  const newPlaylist = () => {
    console.log('Button clicked!');
    setP1('Playlist1');
  }

  function configuration (name, theme, first_sound, first_sound_volume, second_sound, second_sound_volume, third_sound, third_sound_volume, fourth_sound, fourth_sound_volume, fifth_sound, fifth_sound_volume, sixth_sound, sixth_sound_volume) {
    this.name = name;
    this.theme= theme; 
    this.first_sound= first_sound;
    this.first_sound_volume= first_sound_volume;
    this.second_sound= second_sound;
    this.second_sound_volume=  second_sound_volume;
    this.third_sound= third_sound;
    this.third_sound_volume= third_sound_volume;
    this.fourth_sound= fourth_sound;
    this.fourth_sound_volume= fourth_sound_volume;
    this.fifth_sound= fifth_sound;
    this.fifth_sound_volume= fifth_sound_volume;
    this.sixth_sound=  sixth_sound;
    this.sixth_sound_volume= sixth_sound_volume;
  };

  var tempConfig = new configuration();
  const [informacion, setInformacion] = useState('');

  function manejarInformacion(datos) {
    tempConfig.name = P1;
    tempConfig.theme = datos[0]; 
    switch (datos[1]) {
      case 1:
        tempConfig.first_sound = datos[1];
        tempConfig.first_sound_volume = datos[2];
        break;
      case 2:
        tempConfig.second_sound = datos[1];
        tempConfig.second_sound_volume = datos[2];
        break;
      case 3:
        tempConfig.third_sound = datos[1];
        tempConfig.third_sound_volume = datos[2];
        break;
      case 4:
        tempConfig.fourth_sound = datos[1];
        tempConfig.fourth_sound_volume = datos[2];
        break;
      case 5:
        tempConfig.fifth_sound = datos[1];
        tempConfig.fifth_sound_volume = datos[2];
        break;
      case 6:
        tempConfig.sixth_sound = datos[1];
        tempConfig.sixth_sound_volume = datos[2];
        break;
      default:
        break;
    }
    setInformacion(tempConfig);
    console.log(tempConfig);
  }
  
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

  const getTheme = async (id) => {
    const response = await fetch(`/theme/${id}`);
    const data = await response.json();
    setTemp(data);
  };

  const SaveData = async (body) => {
    const response = await fetch('/playlist',body);
    const data = await response.json();
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
                        getTheme(1);
                        console.log("Datos Bosque: ", temp);
                      }}
                  >Forest</button>

                  <button className="button"
                    onClick={() => {
                        getTheme(4);
                        console.log("Datos Oceano: ", temp);
                      }}
                  >Sea</button>

                  <button className="button"
                    onClick={() => {
                        getTheme(2);
                        console.log("Datos Biblio: ", temp);
                      }}
                  >Library</button>

                  <button className="button"
                    onClick={() => {
                      getTheme(3);
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
                    {/* <Sounds someData={temp[0]}/> */}
                    {/* <p>Informacion del hijo: {informacion}</p> */}
                    {/* console.log("Informacion del hijo: ", informacion); */}
                    <Sounds someData={temp[0]} sendDatos={manejarInformacion} configInfo={configuration}/>
                  </div>  

                  <div className="configuration">             
                    <Sounds someData={temp[1]} sendDatos={manejarInformacion} configInfo={configuration}/>
                    {/* <Sounds someData={temp[1]} /> */}
                  </div>
                </div>

                {/* <div className = "row">

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
                </div> */}

              </div>

              {showPlaylist && ( 

                <div className = "PlaylistOptions">
                  <button className="button"
                    onClick={() => {
                      SaveData(informacion);
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

                  <button className="button"
                    onClick={() => {
                        temp = dataForest;
                        console.log("random data:", temp);
                        console.log("Save");
                        setShowP1(true);
                      }}
                  >New Playlist</button>
                  
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


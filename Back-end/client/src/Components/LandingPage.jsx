import React, { useState, useEffect } from 'react';
//import './styles.scss';

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

  function handleClick(data) {
    setText(data);
  }

  function handleClickbtn1(data) {
    setTextbtn1(data);
  }

  function handleClickbtn2(data) {
    setTextbtn2(data);
  }

  function handleClickbtn3(data) {
    setTextbtn3(data);
  }

  function handleClickbtn4(data) {
    setTextbtn4(data);
  }

  function handleClickbtn5(data) {
    setTextbtn5(data);
  }

  function handleClickbtn6(data) {
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
      handleClickbtn1(temp[0].sound_name);
      handleClickbtn2(temp[1].sound_name);
      handleClickbtn3(temp[2].sound_name);
      handleClickbtn4(temp[3].sound_name);
      handleClickbtn5(temp[4].sound_name);
      handleClickbtn6(temp[5].sound_name);
      console.log("TEMP: ", temp);
    }
  },[dataForest]);
    

  if (temp !== null) {

    return (
    <div className = "background">
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
                    temp = dataForest;
                    handleClickbtn1(temp[0].sound_name);
                    handleClickbtn2(temp[1].sound_name);
                    handleClickbtn3(temp[2].sound_name);
                    handleClickbtn4(temp[3].sound_name);
                    handleClickbtn5(temp[4].sound_name);
                    handleClickbtn6(temp[5].sound_name);
                    console.log("Datos Bosque: ", dataForest);
                    // console.log("FOREST");
                    // console.log("TEMP: ", temp);
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


            <div className = "volume">
              <div className = "col">
                <button className="sound"onClick={() => {
                        console.log("Volumen: ");
                      }}
                >V</button>

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
                      // temp = dataForest;
                      console.log(temp[1].sound_name + "sounds", temp[1]);
                      handleClick(temp[1].sound_name);
                      // handleClickbtn2(temp[1].sound_name);
                    }}
                // >2</button>
                >{textbtn2}</button>

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
                      // temp = dataForest;
                      console.log(temp[2].sound_name + "sounds", temp[2]);
                      handleClick(temp[2].sound_name);
                      // handleClickbtn3(temp[2].sound_name);
                    }}
                // >3</button>
                >{textbtn3}</button>

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
                      // temp = dataForest;
                      console.log(temp[3].sound_name + "sounds", temp[3]);
                      handleClick(temp[3].sound_name);
                      // handleClickbtn4(temp[3].sound_name);
                    }}
                // >4</button>
                >{textbtn4}</button>

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
                      // temp = dataForest;
                      console.log(temp[4].sound_name + "sounds", temp[4]);
                      handleClick(temp[4].sound_name);
                      // handleClickbtn5(temp[4].sound_name);
                    }}
                // >5</button>
                >{textbtn5}</button>

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
                      // temp = dataForest;
                      console.log(temp[5].sound_name + "sounds", temp[5]);
                      handleClick(temp[5].sound_name);
                      // handleClickbtn6(temp[5].sound_name);
                    }}
                // >6</button>
                >{textbtn6}</button>

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
   
    );
  }
}

export default Landing;


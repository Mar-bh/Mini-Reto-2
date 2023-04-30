import React from "react";
import { useState, useEffect } from "react";

function SoundPlaylist() {
    const [data, setData] = useState([]);
    const [theme, setTheme] = useState(null);
    const [selectedTheme, setSelectedTheme] = useState(null); // add state for the selected theme
    const [sounds, setSounds] = useState([]);
    const [buttonTexts, setButtonTexts] = useState(null);

    useEffect(() => {
     fetch("/theme")
        .then(response => response.json())
        .then(data => {
          setData(data);
          console.log(data);
          const soundsByTheme = data.reduce((acc, cur) => {
            const themeName = cur.playlist_name;
            const sound = { id: cur.sound_id, name: cur.sound_name, source: cur.sound_source };
            if (acc.hasOwnProperty(themeName)) {
              acc[themeName].sounds.push(sound);
            } else {
              acc[themeName] = { name: themeName, sounds: [sound] };
            }
            return acc;
          }, {});
          const themes = Object.values(soundsByTheme);
          setTheme(themes); // convert object to array         
          setSelectedTheme(Object.values(soundsByTheme)[0].name); // set initial selected theme to the first theme's name
          setSounds(soundsByTheme[theme[0].name].sounds); // set initial sounds to the first theme's sounds
          setButtonTexts(soundsByTheme[Object.values(soundsByTheme)[0].name].sounds.map(sound => sound.name));
        })
        .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (sounds !== null) {
          setButtonTexts(sounds.map(item => item.name));
        }
      }, [sounds]);
    
      useEffect(() => {
        if (theme !== null) {
          setSelectedTheme(theme[0].name);
        }
      }, [theme]);

      const handleThemeClick = (playlistName, sounds) => {
        setSelectedTheme(playlistName);
        setSounds(sounds);
      };
    
      const handleButtonClick = (index) => {
        console.log(`Button ${index + 1} clicked`);
      };
    
      const renderThemeButtons = () => {
        if (theme == null) {
          return null;
        }
        return theme.map((theme, index) => (
          <button
            key={index}
            className={`button ${selectedTheme === theme.name ? "selected" : ""}`}
            onClick={() => handleThemeClick(theme.name, theme.sounds)}
          >
            {theme.name}
          </button>
        ));
      };

      const renderSoundButtons = () => {
        if (buttonTexts === null) {
          return null;
        }
        return buttonTexts.map((text, index) => (
          <button
            key={index}
            className="button"
            onClick={() => handleButtonClick(index)}
          >
            {text}
          </button>
        ));
      };

    return (
        <div className="background">
        <div className="main">
          <div className="fatherContainer2">
            <div className="Title">
              <h1>Ambience sounds</h1>
            </div>
            <div className="ThemeWindow2">
              <div className="container">
                <div className="Options">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('Theme: ', theme);
                    }}
                  >
                    Theme
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      console.log('Data: ', data);
                    }}
                  >
                    Playlist
                  </button>
                </div>
                
                <div>
                    {/* -------------- Theme buttons ------------- */}
                    {renderThemeButtons()}
                </div>
                <div>
                    {/* -------------- Sound buttons ------------- */}
                    {renderSoundButtons()}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SoundPlaylist;
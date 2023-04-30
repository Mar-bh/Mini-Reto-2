import React from "react";
import { useState, useEffect } from "react";

function SoundPlaylist() {
    const [data, setData] = useState([]);
    const [theme, setTheme] = useState([]);

    useEffect(() => {
        fetch("/theme")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    console.log(data);


    return (
        <div> 
            

        </div>
    );
};

export default SoundPlaylist;
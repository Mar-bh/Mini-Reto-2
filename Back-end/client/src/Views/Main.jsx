import React from "react";
import ToDoList from "../Components/ToDoList";
import SoundPlaylist  from "../Components/SoundPlaylist";

function  Main() {
  return (
    <div>
       <div>
          <header className="head">
                <h1>Study Vibes</h1>
          </header>
       </div>
        <div>
          <ToDoList />

        </div>
        <div>
          <SoundPlaylist />
        </div>
{/*        <div>
          <div className="left">
            <ToDoList />
          </div>
          <div className="right">
            <SoundPlaylist />
          </div>
       </div> */}
    </div>
  );
};

export default Main;
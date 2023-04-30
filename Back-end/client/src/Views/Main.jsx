import React from "react";
import ToDoList from "../Components/ToDoList";
import SoundPlaylist  from "../Components/SoundPlaylist";
import './styles.scss';

function  Main() {
  return (
   <div className="background">
     <div className="container">
      <header>
        <h1>Study Vibes</h1>
      </header>
      <div className="row">
        <div className="todolist">
          <ToDoList />
      </div>
      <div className="soundPlaylist">
          <SoundPlaylist />
      </div>
    </div>
  </div>

   </div>
  );
};

export default Main;
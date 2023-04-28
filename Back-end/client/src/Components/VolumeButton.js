import React from "react";
import "./VolumeButton.scss";

const VolumeButton = ({ volume, onClick }) => {
  return (
    <VolumeButton>
        <h1>VolumeButton</h1>
        <button className="volume-button" onClick={onClick}>
        <span className="icon"></span>
        <span className="volume-level" style={{ height: volume + "%" }}></span>
        </button>
    </VolumeButton>
  );
};

export default VolumeButton;

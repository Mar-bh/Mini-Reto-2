import React from "react";
import "./VolumeButton.scss";

const VolumeButton = ({ volume, onClick }) => {
  return (
    <button className="volume-button" onClick={onClick}>
      <span className="icon"></span>
      <span className="volume-level" style={{ height: volume + "%" }}></span>
    </button>
  );
};

export default VolumeButton;

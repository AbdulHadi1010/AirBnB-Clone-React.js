import React from "react";
import gridImg from './Images/grid.png'
export default function Grid() {
  return (
    <div className="gridDiv">
      {/* eslint-disable-next-line */}
      <img src={gridImg} className="photo-grid" />
      <h1 className="grid-h1">Online Experiences</h1>
      <p className="grid-para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

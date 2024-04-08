"use strict";
import "./style.css";
import bird from "./bird.jpg";

export function CSSVariablesAndJS() {
  return (
    <div className="variables-page">
      <h1>Update CSS Variables with JS</h1>
      <div className="input-box">
        <label id="spacing">Spacing: </label>
        <input type="range" id="spacing" name="spacing"></input>

        <label id="blur">Blur: </label>
        <input type="range" id="blur" name="blur"></input>

        <label id="base-color">Base color: </label>
        <input type="color" id="base-color" name="base-color"></input>
      </div>
      <img className="bird-img" src={bird} alt="small-bird" />
    </div>
  );
}

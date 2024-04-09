"use strict";
import "./style.css";
import bird from "./bird.jpg";

export function CSSVariablesAndJS() {
  return (
    <div className="variables-page">
      <h1>
        Update CSS Variables with <span className="colored-text">JS</span>
      </h1>
      <div className="input-box">
        <label id="spacing">Spacing: </label>
        <input
          type="range"
          min="10"
          max="200"
          id="spacing"
          name="spacing"
          defaultValue="10"
          onChange={(e) => {
            document.documentElement.style.setProperty(
              "--spacing",
              `${e.target.value}px`
            );
          }}
        ></input>

        <label id="blur">Blur: </label>
        <input
          type="range"
          min="0"
          max="25"
          id="blur"
          name="blur"
          defaultValue="0"
          onChange={(e) => {
            document.documentElement.style.setProperty(
              "--blur",
              `${e.target.value}px`
            );
          }}
        ></input>

        <label id="base-color">Base color: </label>
        <input
          type="color"
          id="base-color"
          name="base-color"
          defaultValue="#17964c"
          onChange={(e) => {
            document.documentElement.style.setProperty(
              "--base-color",
              e.target.value
            );
          }}
        ></input>
      </div>
      <img className="bird-img" src={bird} alt="small-bird" />
    </div>
  );
}

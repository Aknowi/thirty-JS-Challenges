import "./style.css";
import { DrumKey } from "./DrumKey";
import { useEffect, useState } from "react";

const drumElements = [
  {
    name: "a",
    soundName: "clap",
    keyCode: "65",
    audioSrc: "./ImagesFontsAudio/clap.wav",
  },
  {
    name: "s",
    soundName: "hihat",
    keyCode: "83",
    audioSrc: "./ImagesFontsAudio/hihat.wav",
  },
  {
    name: "d",
    soundName: "kick",
    keyCode: "68",
    audioSrc: "./ImagesFontsAudio/kick.wav",
  },
  {
    name: "f",
    soundName: "openhat",
    keyCode: "70",
    audioSrc: "./ImagesFontsAudio/openhat.wav",
  },
  {
    name: "g",
    soundName: "boom",
    keyCode: "71",
    audioSrc: "./ImagesFontsAudio/boom.wav",
  },
  {
    name: "h",
    soundName: "ride",
    keyCode: "72",
    audioSrc: "./ImagesFontsAudio/ride.wav",
  },
  {
    name: "j",
    soundName: "snare",
    keyCode: "74",
    audioSrc: "./ImagesFontsAudio/snare.wav",
  },
  {
    name: "k",
    soundName: "tom",
    keyCode: "75",
    audioSrc: "./ImagesFontsAudio/tom.wav",
  },
  {
    name: "l",
    soundName: "tink",
    keyCode: "76",
    audioSrc: "./ImagesFontsAudio/tink.wav",
  },
];

export function DrumKit() {
  const handleOnKey = (event) => {
    const key = event.key;
    const matchedElement = drumElements.find((element) => element.name === key);
    if (matchedElement) {
      let audio = new Audio(matchedElement.audioSrc);
      audio.play();
    }
  };

  return (
    <div tabIndex="0" onKeyDown={handleOnKey}>
      {drumElements.map((element, index) => {
        return (
          <DrumKey
            keyName={element.name}
            keySound={element.soundName}
            key={index}
            keySrc={element.audioSrc}
            audioID={index}
          />
        );
      })}
    </div>
  );
}

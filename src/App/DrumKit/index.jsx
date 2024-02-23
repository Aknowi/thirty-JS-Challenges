import "./style.css";
import { DrumKey } from "./DrumKey";
import Clap from "./ImagesFontsAudio/clap.wav";
import Hihat from "./ImagesFontsAudio/hihat.wav";
import Kick from "./ImagesFontsAudio/kick.wav";
import Openhat from "./ImagesFontsAudio/openhat.wav";
import Boom from "./ImagesFontsAudio/boom.wav";
import Ride from "./ImagesFontsAudio/ride.wav";
import Snare from "./ImagesFontsAudio/snare.wav";
import Tom from "./ImagesFontsAudio/tom.wav";
import Tink from "./ImagesFontsAudio/tink.wav";
import { useState } from "react";

const drums = [
  {
    name: "a",
    soundName: "clap",
    audio: new Audio(Clap),
  },
  {
    name: "s",
    soundName: "hihat",
    audio: new Audio(Hihat),
  },
  {
    name: "d",
    soundName: "kick",
    audio: new Audio(Kick),
  },
  {
    name: "f",
    soundName: "openhat",
    audio: new Audio(Openhat),
  },
  {
    name: "g",
    soundName: "boom",
    audio: new Audio(Boom),
  },
  {
    name: "h",
    soundName: "ride",
    audio: new Audio(Ride),
  },
  {
    name: "j",
    soundName: "snare",
    audio: new Audio(Snare),
  },
  {
    name: "k",
    soundName: "tom",
    audio: new Audio(Tom),
  },
  {
    name: "l",
    soundName: "tink",
    audio: new Audio(Tink),
  },
];

export function DrumKit() {
  const [eventKey, setEventKey] = useState("");

  const handleOnKey = (event) => {
    const matchedDrum = drums.find((drum) => drum.name === event.key);
    if (matchedDrum) {
      setEventKey(event.key);
      matchedDrum.audio.play();
    }
  };

  return (
    <div onKeyDown={handleOnKey} tabIndex="0" className="drum-kit-box">
      {drums.map((drum, index) => {
        return (
          <DrumKey
            key={index}
            keyName={drum.name}
            keySound={drum.soundName}
            className={`drum-key ${drum.name === eventKey ? "active" : ""}`}
          />
        );
      })}
    </div>
  );
}

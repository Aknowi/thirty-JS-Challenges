import "./style.css";

export function DrumKey({ keyName, keySound, keySrc, audioID }) {
  return (
    <div className="drum-key">
      <h3>{keyName}</h3>
      <p>{keySound}</p>
      <audio id={audioID}>
        <source src={keySrc} />
      </audio>
    </div>
  );
}

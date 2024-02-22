import "./style.css";

export function DrumKey({ keyName, keySound }) {
  return (
    <div className="drum-key">
      <h3>{keyName}</h3>
      <p>{keySound}</p>
    </div>
  );
}

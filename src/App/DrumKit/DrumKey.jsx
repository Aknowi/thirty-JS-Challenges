import "./style.css";

export function DrumKey({ keyName, keySound, className }) {
  return (
    <div className={className}>
      <h3>{keyName}</h3>
      <p>{keySound}</p>
    </div>
  );
}

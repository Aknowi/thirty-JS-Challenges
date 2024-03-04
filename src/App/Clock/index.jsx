import "./style.css";

// - zmienić z rem na px
// - dodać RWD
// - dodać funkcjonalność zegara

export function Clock() {
  return (
    <div className="clock-page">
      <div className="clock-frame">
        <div className="clock-hand hour"></div>
        <div className="clock-hand minute"></div>
        <div className="clock-hand second"></div>
      </div>
    </div>
  );
}

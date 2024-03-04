import { NavLink } from "react-router-dom";

export function Dashboard() {
  // Stworzyć buttony powrotu dla każdej strony do dashboard

  return (
    <div className="dashboard-page">
      <div className="challenges-box">
        <NavLink to="drum-kit/" className="challenges-link">
          Challenge 1: Drum Kit
        </NavLink>
        <NavLink to="clock/" className="challenges-link">
          Challenge 2: Clock
        </NavLink>
      </div>
    </div>
  );
}

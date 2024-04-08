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
        <NavLink to="css-variables-and-js/" className="challenges-link">
          Challenge 3: Playing with CSS Variables and JS &#40;In progress&#41;
        </NavLink>
      </div>
    </div>
  );
}

// import { DrumKit } from "./Dashboard/leaves.png";

import { NavLink } from "react-router-dom";

export function Dashboard() {
  // Stworzyć buttony powrotu dla każdej strony do dashboard

  return (
    <div className="dashboard-box">
      <div className="challenges-box">
        <NavLink to="/drum-kit">Challange 1: Drum Kit</NavLink>
      </div>
    </div>
  );
}

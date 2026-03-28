import { useState } from "react";
import bulbOn from "../assets/bulb-on.svg";
import bulbOff from "../assets/bulb-off.svg";

function Task1BulbToggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <section className="task-card">
      <h2>Task 1: Bulb Toggle</h2>
      <img
        className="bulb"
        src={isOn ? bulbOn : bulbOff}
        alt={isOn ? "Bulb is ON" : "Bulb is OFF"}
      />
      <p className="status">Bulb is currently {isOn ? "ON" : "OFF"}.</p>
      <button type="button" onClick={() => setIsOn((prev) => !prev)}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </section>
  );
}

export default Task1BulbToggle;

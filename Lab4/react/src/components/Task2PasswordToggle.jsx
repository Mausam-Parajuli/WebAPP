import { useState } from "react";

function Task2PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="task-card">
      <h2>Task 2: Show/Hide Password</h2>
      <div className="row">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
        />
        <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </section>
  );
}

export default Task2PasswordToggle;

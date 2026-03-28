import { useState } from "react";

function Task5Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="task-card">
      <h2>Task 5: Counter</h2>
      <p className="counter-value">{count}</p>
      <div className="button-group">
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          Decrement
        </button>
        <button className="danger" type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default Task5Counter;

import { NavLink, Route, Routes } from "react-router-dom";
import Task1BulbToggle from "./components/Task1BulbToggle";
import Task2PasswordToggle from "./components/Task2PasswordToggle";
import Task3ParentChildList from "./components/Task3ParentChildList";
import Task4RouterPages from "./components/Task4RouterPages";
import Task5Counter from "./components/Task5Counter";
import "./App.css";

function App() {
  return (
    <main className="app-shell">
      <header>
        <h1>LAB 4: React + Vite Tasks</h1>
        <p>Select a task below.</p>
      </header>

      <nav className="task-nav">
        <NavLink to="/">Task 1</NavLink>
        <NavLink to="/task2">Task 2</NavLink>
        <NavLink to="/task3">Task 3</NavLink>
        <NavLink to="/task4/home">Task 4</NavLink>
        <NavLink to="/task5">Task 5</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Task1BulbToggle />} />
        <Route path="/task2" element={<Task2PasswordToggle />} />
        <Route path="/task3" element={<Task3ParentChildList />} />
        <Route path="/task4/*" element={<Task4RouterPages />} />
        <Route path="/task5" element={<Task5Counter />} />
      </Routes>
    </main>
  );
}

export default App;

import Navbar from "./components/Navbar";
import ToDo from "./components/ToDo";
import { Routes, Route } from "react-router-dom";
import View from "./components/View";
import Edit from "./components/Edit";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("list")) || []
  );
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<ToDo todos={todos} setTodos={setTodos} />} />
        <Route
          path="/view/:id"
          element={<View todos={todos} setTodos={setTodos} />}
        ></Route>{" "}
        <Route path="/edit/:id" element={<Edit />}></Route>{" "}
      </Routes>
    </div>
  );
}

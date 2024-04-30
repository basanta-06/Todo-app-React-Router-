import Form from "./Form";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

export default function ToDo({ todos, setTodos }) {
  //   useEffect(() => {
  //     getitem();
  //   }, []);

  //   const getitem = () => {
  //     localStorage.getItem("list")
  //       ? JSON.parse(localStorage.getItem("list"))
  //       : [];
  //   };

  return (
    <div>
      <Form setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

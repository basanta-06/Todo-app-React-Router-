import { useEffect, useState } from "react";
export default function Form({ setTodos, todos }) {
  const [todo, setTodo] = useState({ name: "", details: "", done: false });

  function handelClick(e) {
    e.preventDefault();
    setTodos((prevTodos) => [...todos, { ...todo, id: crypto.randomUUID() }]);

    setTodo({ name: "", details: "" });
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todo]);

  return (
    <form className="flex flex-col mx-auto w-96  rounded-md mt-10 p-5 bg-gray-600 text-white">
      <div className="flex flex-col py-3">
        <label htmlFor="">TaskName</label>
        <input
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          className="h-5 mt-2 text-xl text-black p-5 "
          type="text"
          value={todo.name}
        />
      </div>
      <div className="flex flex-col py-3">
        <label htmlFor="">Details</label>
        <textarea
          onChange={(e) => setTodo({ ...todo, details: e.target.value })}
          className=" text-xl mt-2 w-full text-black p-5 "
          type="text"
          value={todo.details}
        />
      </div>
      <button
        onClick={handelClick}
        className="p-2 mt-3 bg-white text-black text-2xl"
      >
        Add
      </button>
    </form>
  );
}

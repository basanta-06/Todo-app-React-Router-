import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("list"));
    const todo = todos.find((t) => id === t.id);
    if (todo) {
      setDetails(todo.details);
      setName(todo.name);
    }
  }, [id]);
  function handleEdit(e) {
    e.preventDefault();
    const todos = JSON.parse(localStorage.getItem("list")) || [];
    const updatedtodos = todos.map((t) =>
      t.id === id ? { ...t, name: name, details: details } : t
    );
    localStorage.setItem("list", JSON.stringify(updatedtodos));
    navigate("/");
  }

  return (
    <div className="w-1/2 items-center flex flex-col   mt-5 mx-auto ">
      <h1 className="text-4xl text-gray-700 font-bold">Edit Your task here</h1>
      <form className=" w-fit flex flex-col  mt-4 p-5" onSubmit={handleEdit}>
        <div>
          <label className=" text-2xl mb-3" htmlFor="">
            Task Name:
          </label>
          <input
            className="border-2 p-2 mt-2 text-2xl border-gray-500"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className=" text-2xl" htmlFor="">
            Description:
          </label>
          <input
            className="border-2 p-2 mt-2 text-2xl border-gray-500"
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button
          className="p-4 bg-slate-800 rounded-lg mt-4 text-white font-bold"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}

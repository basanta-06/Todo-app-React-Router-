import { useNavigate, useParams } from "react-router-dom";

export default function View({ setTodos }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = JSON.parse(localStorage.getItem("list"));
  const todo = todos.find((todo) => todo.id === id);

  function handleDelete() {
    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
    //sets the new list after deleting the items from the local storage...
    localStorage.setItem("list", JSON.stringify(newTodos));
    navigate("/");
  }

  return (
    <div>
      <div className="w-1/2 h-1/2 mt-7 bg-gray-400 text-white text-2xl flex flex-col items-center mx-auto p-4">
        <div className="w-full p-4 flex flex-row  ">
          <h1 className="capitalize font-bold  pb-7"></h1>
          <p className="text-xl capitalize">Task Name: {todo.name}</p>
        </div>
        <div className="w-full p-4 flex flex-row  ">
          <p className=" ">Task :</p>
          <p className="ml-4 capitalize ">{todo.details}</p>
        </div>
        <div>
          <p>Status:</p>
          <p>{todo.done ? "Done" : "Not Done"}</p>
        </div>

        <button
          className="border-pink-100 border-solid border-2 p-2 hover:bg-pink-100 hover:text-black rounded-md"
          onClick={() => navigate(-1)}
        >
          Back to Home{" "}
        </button>
        <button
          className="border-red-600 border-solid border-2 p-2 mt-3 hover:bg-red-600 hover:text-black rounded-md"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

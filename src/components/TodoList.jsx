import { Link } from "react-router-dom";
export default function TodoList({ todos, setTodos }) {
  //to handel delete from the local storage....
  function handleDelete(todo) {
    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
    //sets the new list after deleting the items from the local storage...
    localStorage.setItem("list", JSON.stringify(newTodos));
  }

  function handelDone(todo) {
    const newTodos = todos.map((t) =>
      t === todo ? { ...t, done: !t.done } : t
    );
    setTodos(newTodos);
    localStorage.setItem("list", JSON.stringify(newTodos));
  }

  return (
    <div className="flex  flex-col w-1/2  mx-auto p-3rounded-lg  ">
      <ul>
        {todos.length === 0 ? (
          <p className="p-3 text-center text-2xl text-gray-600">
            No task remaining
          </p>
        ) : (
          todos?.map((todo) => (
            <div key={todo.id}>
              <li className="text-2xl  capitalize my-2 p-2   font-bold ">
                {todo.name}
                <button
                  className="float-right ml-4 text-2xl cursor-pointer"
                  onClick={() => handleDelete(todo)}
                >
                  X
                </button>
                <Link
                  to={`/view/${todo.id}`}
                  className="float-right ml-4 text-2xl cursor-pointer"
                >
                  View
                </Link>
                <Link to={`/edit/${todo.id}`}>
                  <button className="float-right  text-2xl cursor-pointer">
                    Edit
                  </button>
                </Link>
                <input
                  onChange={() => handelDone(todo)}
                  type="checkbox"
                  className="float-right size-4 item-center mt-2 mr-4"
                  checked={todo.done}
                />
              </li>
              <hr className="border-2 border-gray-500 border-solid" />
            </div>
          ))
        )}
      </ul>
    </div>
  );
}

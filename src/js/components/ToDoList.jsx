import { useEffect, useState } from "react";
import todoServices from "../services/todoServices";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function getAllTodos () {
      const data = await todoServices.getToDo();

      console.log(data)

      setTodoList(data.todos)
    }

    getAllTodos()

  }, [])


  async function handleSubmit(e) {
    e.preventDefault(); // Evitar que por defecto se recargue la página.

    const newTask = {
      label: inputValue,
      is_done: false,
    };

    const data = await todoServices.postToDo(newTask);

    setTodoList([...todoList, data]); // Lo que había en todoList + la nueva tarea
    setInputValue(""); // Limpiar el input después de agregar la tarea
  }

  return (
    <div>
      <h1>To Do List Component</h1>
      <form
        className="w-50 ms-5 mt-5"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={inputValue} // Aquí igualo el valor inicial de inputValue con lo que aparece en el input
            onChange={(e) => setInputValue(e.target.value)} // Con esto hago que cada vez que cambie el input cambie inputValue
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ul>
        {todoList.length > 0 &&
          todoList.map((todo, index) => {
            return <li key={index}>{todo.label}</li>;
          })}
      </ul>
    </div>
  );
}

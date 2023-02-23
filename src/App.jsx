import { useState } from "react";
import "./App.css";
import { useTodo, addTodo, removeTodo, updateTodo } from "./redux/todos";

function App() {
  const [text, setText] = useState();
  const { todosData } = useTodo();

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleAdd() {
    const todo = { title: text, done: false, id: Date.now() };

    return addTodo(todo);
  }

  function handleRemove(id) {
    return removeTodo(id);
  }

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>Add todo</button>

      {todosData.map((item) => {
        return (
          <div className={item.done && "done"}>
            {item.title} {item.id} {item.done ? "Done" : "Not Done"}
            <button onClick={() => updateTodo(item)}>
              {item.done ? "Undo" : "Done"}
            </button>
            <button onClick={() => handleRemove(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

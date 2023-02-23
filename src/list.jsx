import { useTodos, removeTodo } from "./redux/todos";

export default function List() {
  const { todoData } = useTodos();

  return (
    <ul>
      {todoData.map((item) => (
        <li key={item.objectID}>
          <span>
            <a href={item.url}> {item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <button onClick={() => removeTodo(item.objectID)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

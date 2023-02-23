import { createReduxModule } from "hooks-for-redux";

const initialStateTodos = {
  todosData: [],
};

export const [useTodo, { addTodo, removeTodo, updateTodo }] = createReduxModule(
  "todos",
  initialStateTodos,
  {
    addTodo: (state, todo) => {
      return { ...state, todosData: [...state.todosData, todo] };
    },
    removeTodo: (state, id) => {
      return {
        ...state,
        todosData: state.todosData.filter((todo) => todo.id !== id),
      };
    },
    updateTodo: (state, todo) => {
      const newList = [...state.todosData];

      for (let i = 0; i < newList.length; i++) {
        const item = newList[i];
        if (item.id == todo.id) {
          item.done = !todo.done;
        }
      }

      return { ...state, newList };
    },
  }
);

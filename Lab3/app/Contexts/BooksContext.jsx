import { createContext, useState } from "react";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "Książka kulinarna",
      type: "academia",
      completed: false,
    },
    {
      id: 2,
      text: "Hobbit",
      type: "adventure",
      completed: false,
    },
    {
      id: 3,
      text: "Sherlock Holmes",
      type: "mystery",
      completed: false,
    },
  ]);

  return (
    <TodosContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodosContext.Provider>
  );
};
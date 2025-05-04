import { useContext, useState } from "react";
import { TodosContext } from "../Contexts/BooksContext";
import TypeSelector from "../Components/TypeSelector";

export function meta() {
  return [
    { title: "NEW Book" },
    { name: "description", content: "Website for ToDo App" },
  ];
}

export default function New() {
  const { todoList, setTodoList } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("home");

  const handleNewTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    const tempTodo = {
      id: todoList.length + 1,
      text: newTodo,
      type: selectedCategory,
      completed: false,
      dateCompleted: null,
    };
    setTodoList((prev) => prev.concat([tempTodo]));
  };
  return (
    <main className="list-vertical">
      <form className="list-vertical">
        <input
          placeholder="New Book"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          autoFocus
        />
        <TypeSelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <button onClick={handleNewTodo}>Add</button>
      </form>
    </main>
  );
}
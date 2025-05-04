import { useContext, useState } from "react";
import Book from "../Components/Book";
import { TodosContext } from "../Contexts/BooksContext";

export function meta() {
  return [
    { title: "Book App" },
    { name: "description", content: "Website for Book App" },
  ];
}

export default function Home() {
  const types = ["academia", "adventure", "mystery"];
  const { todoList, setTodoList } = useContext(TodosContext);
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleDone = (todoID) => {
    const now = new Date();
    setTodoList((prev) =>
      prev.map((it) =>
        it.id === todoID
          ? {
              ...it,
              dateCompleted: String(now.toLocaleString("pl-PL")),
            }
          : it
      )
    );
  };

  const todoListHTML = todoList
    .filter((it) => {
      const matchesQuery = it.text.toLowerCase().includes(query.toLowerCase());
      const matchesType = selectedType ? it.type === selectedType : true;
      return matchesQuery && matchesType;
    })
    .sort((a, b) => a.completed - b.completed)
    .map((it) => <Book key={it.id} todo={it} handleDone={handleDone} />);

  return (
    <main className="list-vertical">
      <input
        placeholder="Search in list"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      ></input>
      <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
        <option value="">All options</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>

      {todoListHTML}
    </main>
  );
}

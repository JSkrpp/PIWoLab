import { useContext, useState } from "react";
import Book from "../Components/Book";
import { BooksContext } from "../Contexts/BooksContext";

export function meta() {
  return [
    { title: "Book App" },
    { name: "description", content: "Website for Book App" },
  ];
}

export default function Home() {
  const types = ["academia", "adventure", "mystery"];
  const { bookList, setBookList } = useContext(BooksContext);
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleDone = (bookID) => {
    setBookList((prev) =>
      prev.map((it) =>
        it.id === bookID
          ? {
              ...it,
            }
          : it
      )
    );
  };

  const bookListHTML = bookList
    .filter((it) => {
      const matchesQuery = it.text.toLowerCase().includes(query.toLowerCase());
      const matchesType = selectedType ? it.type === selectedType : true;
      return matchesQuery && matchesType;
    })
    .sort((a, b) => a.completed - b.completed)
    .map((it) => <Book key={it.id} book={it} handleDone={handleDone} />);

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

      {bookListHTML}
    </main>
  );
}

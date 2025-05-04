import { useContext, useState } from "react";
import { BooksContext } from "../Contexts/BooksContext";
import TypeSelector from "../Components/TypeSelector";

export function meta() {
  return [
    { title: "NEW Book" },
    { name: "description", content: "Website for Book App" },
  ];
}

export default function New() {
  const { bookList, setBookList } = useContext(BooksContext);
  const [newBook, setNewBook] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("home");

  const handleNewBook = (e) => {
    e.preventDefault();
    if (!newBook) return;
    const tempBook = {
      id: List.length + 1,
      text: newBook,
      type: selectedCategory,
      completed: false,
      dateCompleted: null,
    };
    setBookList((prev) => prev.concat([tempBook]));
  };
  return (
    <main className="list-vertical">
      <form className="list-vertical">
        <input
          placeholder="New Book"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          autoFocus
        />
        <TypeSelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <button onClick={handleNewBook}>Add</button>
      </form>
    </main>
  );
}
import { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [bookList, setBookList] = useState([
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
    <BooksContext.Provider value={{ bookList, setBookList }}>
      {children}
    </BooksContext.Provider>
  );
};
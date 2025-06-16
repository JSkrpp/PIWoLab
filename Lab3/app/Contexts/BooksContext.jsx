import { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [bookList, setBookList] = useState([
    {
      id: 1,
      text: "Książka kulinarna",
      type: "academia",
      owner: "Mike123",
    },
    {
      id: 2,
      text: "Hobbit",
      type: "adventure",
      owner: null,
    },
    {
      id: 3,
      text: "Sherlock Holmes",
      type: "mystery",
      owner: null,
    },
  ]);

  return (
    <BooksContext.Provider value={{ bookList, setBookList }}>
      {children}
    </BooksContext.Provider>
  );
};
export default ({ book, handleDone }) => {
    const typer = (type) => {
      if (type === "academia") return "🎓";
      if (type === "adventure") return "🗡️";
      if (type === "mystery") return "🔍";
    };
    return (
      <article
        className={`list-horizontal ${book.completed && "done"}`}
        onClick={!book.completed ? () => handleDone(book.id) : null}
      >
        <span>
          <span>{typer(book.type)}</span>
          <span>{book.text}</span>
          <span> Owned by: {book.owner}</span>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </span>
        {book.completed}
      </article>
    );
  };
  
  //   const typer = useCallback((type) => {
  //     x = x + 1;
  //     console.log(x);
  //     if (type === "academia") return "🎓";
  //     if (type === "work") return "👩‍💻";
  //     if (type === "home") return "🏡";
  //   });
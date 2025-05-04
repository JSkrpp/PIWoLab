export default ({ todo, handleDone }) => {
    const typer = (type) => {
      if (type === "academia") return "🎓";
      if (type === "adventure") return "🗡️";
      if (type === "mystery") return "🔍";
    };
    return (
      <article
        className={`list-horizontal ${todo.completed && "done"}`}
        onClick={!todo.completed ? () => handleDone(todo.id) : null}
      >
        <span>
          <span>{typer(todo.type)}</span>
          <span>{todo.text}</span>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </span>
        {todo.completed}
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
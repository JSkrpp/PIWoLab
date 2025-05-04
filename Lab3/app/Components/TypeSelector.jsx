import { useState } from "react";

export default ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="list-horizontal">
      <input
        type="radio"
        icon="🗡️"
        checked={selectedCategory === "adventure"}
        onChange={() => setSelectedCategory("adventure")}
      />
      <input
        type="radio"
        icon="🎓"
        checked={selectedCategory === "academia"}
        onChange={() => setSelectedCategory("academia")}
      />

      <input
        type="radio"
        icon="🔍"
        checked={selectedCategory === "mystery"}
        onChange={() => setSelectedCategory("mystery")}
      />
    </aside>
  );
};
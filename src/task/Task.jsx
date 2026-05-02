import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
  const [item, setItem] = useState("");
  const [items, setItems] = useImmer([]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setItems((draft) => {
      draft.push(item);
    });
    setItem("");
  }
  return (
    <div>
      <h1>Create Item</h1>
      <form  >
        <input  value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add item</button>
      </form>
      <h1>List Items</h1>
      <ul>
        {items.map((item, idx) =>  
          <li key={idx}>{item}</li>
         )}
      </ul>
    </div>
  );
}

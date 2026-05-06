import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NotesContext";

export default function Note({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(NotesDispatchContext);
  let component;

  function handleChangeText(e) {
    const newNote = { ...note, text: e.target.value };
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      text: e.target.value
    })
  }

  function handleChangeDone(e) {
    const newNote = { ...note, done: e.target.checked };
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      done: e.target.checked
    })
  }

  function handleDelete(){
    dispatch({
      ...note,
      type: "DELETE_NOTE",
      id: note.id
    })
  }
  if (isEditing) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={note.done}
          onChange={handleChangeDone}
        />
        {component}
        <button onClick={handleDelete}>Delete</button>
      </label>
    </>
  );
}

import { useImmer, useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { NotesContext, NotesDispatchContext } from "./NotesContext";

let id = 0;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: true },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn RaactJS", done: false },
];

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  // function handleAddNote(text) {
  //   dispatch({
  //     type: "ADD_NOTE",
  //     text: text,
  //   });
  // }

  // function handleChangeNote(note) {
  //   dispatch({
  //     type: "CHANGE_NOTE",
  //     ...note,
  //   });
  // }
  // function handleDeleteNote(note) {
  //   dispatch({
  //     type: "DELETE_NOTE",
  //     id: note.id,
  //   });
  // }

  function notesReducer(notes, action) {
    if (action.type === "ADD_NOTE") {
      notes.push({
        id: id++,
        text: action.text,
        done: false,
      });
    } else if (action.type === "CHANGE_NOTE") {
      const idx = notes.findIndex((note) => note.id === action.id);
      //   notes[idx] = { ...action };
      notes[idx].text = action.text;
      notes[idx].done = action.done;
    } else if (action.type === "DELETE_NOTE") {
      const idx = notes.findIndex((note) => note.id === action.id);
      notes.splice(idx, 1);
    }
  }
  return (
    <div className="">
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note App</h1>
          <NoteForm/>
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}

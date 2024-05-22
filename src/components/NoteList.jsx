// src/components/NoteList.jsx

import Note from './Note';

function NoteList({ notes, deleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note key={index} index={index} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;

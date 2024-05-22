// src/components/Note.jsx

import './Note.css';

function Note ({ index, note, deleteNote }) {
  return (
    <div className="note">
      <p>{note}</p>
      <button className="delete-button" onClick={() => deleteNote(index)}>Löschen</button>
    </div>
  );
}

export default Note;

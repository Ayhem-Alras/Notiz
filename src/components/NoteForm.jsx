// src/components/NoteForm.jsx
import React, { useState } from 'react';
import './NoteForm.css';

function NoteForm({ addNote }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      addNote(note);
      setNote('');
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Neue Notiz..."
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}

export default NoteForm;

// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <Header />
      <div id="notebook-paper">
        <div className="content">
          <NoteForm addNote={addNote} />
          <NoteList notes={notes} deleteNote={deleteNote} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

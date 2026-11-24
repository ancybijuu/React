<<<<<<< HEAD

import { useState } from "react";

import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

import "./App.css";

function App() {
  // Store all notes
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "React Learning",
      description: "Learning React components and props.",
      date: "24/11/2026"
    },
    {
      id: 2,
      title: "JavaScript Practice",
      description: "Practising arrays and functions.",
      date: "24/11/2026"
    }
  ]);

  // Store the note currently being edited
  const [editingNote, setEditingNote] = useState(null);

  // ADD NOTE
  function addNote(title, description) {
    const newNote = {
      id: Date.now(),
      title,
      description,
      date: new Date().toLocaleDateString("en-IN")
    };

    setNotes(previousNotes => [...previousNotes, newNote]);
  }

  // EDIT NOTE
  function updateNote(title, description) {
    setNotes(previousNotes =>
      previousNotes.map(note =>
        note.id === editingNote.id
          ? { ...note, title, description }
          : note
      )
    );

    setEditingNote(null);
  }

  // DELETE NOTE
  function deleteNote(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (confirmDelete) {
      setNotes(previousNotes =>
        previousNotes.filter(note => note.id !== id)
      );

      if (editingNote?.id === id) {
        setEditingNote(null);
      }
    }
  }

  return (
    <div className="app">

      {/* NAVIGATION BAR */}
      <Navbar />

      <main className="main-content">

        {/* WELCOME SECTION */}
        <section className="hero-section">

          <span className="hero-tag">
            ✨ WELCOME TO NOTESPACE
          </span>

          <h1>
            Where every idea
            <br />
            <span>finds its perfect space.</span>
          </h1>

          <p>
            Capture your thoughts, save your inspiration,
            and turn everyday ideas into something wonderful.
          </p>

          <div className="hero-decoration">
            ✦ &nbsp; Think it. Write it. Remember it. &nbsp; ✦
          </div>

        </section>

        {/* WORKSPACE HEADING */}
        <section className="dashboard-heading">

          <div>
            <h2>Your Workspace</h2>
            <p>A little space for your big ideas.</p>
          </div>

          <div className="notes-count">
            ✦ {notes.length} {notes.length === 1 ? "Note" : "Notes"}
          </div>

        </section>

        {/* NOTE FORM */}
        <NoteForm
          onAddNote={addNote}
          editingNote={editingNote}
          onUpdateNote={updateNote}
          onCancelEdit={() => setEditingNote(null)}
        />

        {/* NOTES DISPLAY */}
        <NotesList
          notes={notes}
          onEdit={setEditingNote}
          onDelete={deleteNote}
        />

        {/* FOOTER */}
        <footer className="app-footer">
          <p>
            Made with ♥ in NoteSpace
          </p>

          <span>
            Your thoughts deserve a beautiful home.
          </span>
        </footer>

      </main>
=======
import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="student-container">
      <h1>🎓 Student Profile</h1>
      <p className="subtitle">Meet Our Students</p>

      <Student
        name="Anu"
        age={21}
        course="BCA"
        place="Trivandrum"
      />

      <Student
        name="Arun"
        age={22}
        course="B.Tech"
        place="Kochi"
      />

      <Student
        name="Meera"
        age={20}
        course="B.Sc"
        place="Kollam"
      />
>>>>>>> 3d13e97a2fa2fa32511f3a2ef2574a1851efb5c4
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 3d13e97a2fa2fa32511f3a2ef2574a1851efb5c4

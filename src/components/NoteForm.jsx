
import { useState, useEffect } from "react";

function NoteForm({
  onAddNote,
  editingNote,
  onUpdateNote,
  onCancelEdit
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Load selected note into the form
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(editingNote.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingNote]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please enter both title and description!");
      return;
    }

    if (editingNote) {
      onUpdateNote(title.trim(), description.trim());
    } else {
      onAddNote(title.trim(), description.trim());
    }

    setTitle("");
    setDescription("");
  }

  function clearForm() {
    setTitle("");
    setDescription("");

    if (editingNote) {
      onCancelEdit();
    }
  }

  return (
    <div className="form-container">
      <h2>{editingNote ? "Edit Note" : "Create a New Note"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter note title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          placeholder="Enter note description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button type="submit">
          {editingNote ? "Update Note" : "Create Note"}
        </button>

        <button type="button" onClick={clearForm}>
          {editingNote ? "Cancel Edit" : "Clear Form"}
        </button>
      </form>
    </div>
  );
}

export default NoteForm;

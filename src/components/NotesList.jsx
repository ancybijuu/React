
import NoteCard from "./NoteCard";

function NotesList({ notes, onEdit, onDelete }) {
  return (
    <div className="notes-container">
      <h2>My Notes ({notes.length})</h2>

      {notes.length === 0 ? (
        <p>No notes available. Create your first note!</p>
      ) : (
        <div className="notes-grid">
          {notes.map(note => (
            <NoteCard
              key={note.id}
              title={note.title}
              description={note.description}
              date={note.date}
              onEdit={() => onEdit(note)}
              onDelete={() => onDelete(note.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NotesList;

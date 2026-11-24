
function NoteCard({
  title,
  description,
  date,
  onEdit,
  onDelete
}) {
  return (
    <div className="note-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <small>Created: {date}</small>

      <div className="note-actions">
        <button className="edit-btn" onClick={onEdit}>
          Edit
        </button>

        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;

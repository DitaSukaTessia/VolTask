import { useState } from "react";

function EditModal({ task, onClose, onSave }) {
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      title,
      priority,
      status,
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Task</h3>

        <form onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>

          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">pending</option>
            <option value="active">active</option>
            <option value="blocked">blocked</option>
            <option value="done">done</option>
          </select>

          <button type="button" onClick={onClose}>
            Cancel
          </button>

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default EditModal;

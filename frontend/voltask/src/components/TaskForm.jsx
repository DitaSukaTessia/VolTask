import { useState } from "react";

function TaskForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ title, priority });
    setTitle("");
    setPriority("medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-md max-w-xl"
    >
      <input
        type="text"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 bg-gray-100 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="bg-gray-100 px-3 py-2 rounded-lg outline-none"
      >
        <option className="bg-gray-100 rounded-md" value="low">
          Low
        </option>
        <option className="bg-gray-100 rounded-md" value="medium">
          Medium
        </option>
        <option className="bg-gray-100 rounded-md" value="high">
          High
        </option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;

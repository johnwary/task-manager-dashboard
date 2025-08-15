import { useState } from 'react';
import { useTaskContext } from '../hooks/useTaskContext';
import type { TaskPriority } from '../types/task';

const generateId = () => Date.now().toString();

export const TaskForm = () => {
  const { dispatch } = useTaskContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<TaskPriority>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    const now = new Date();
    dispatch({
      type: 'ADD',
      payload: {
        id: generateId(),
        title: title.trim(),
        description: description.trim(),
        priority,
        status: 'active',
        createdAt: now,
        updatedAt: now,
      },
    });

    // Reset
    setTitle('');
    setDescription('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <div>
        <label className="block font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter task title"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded resize-none"
          rows={3}
          placeholder="Optional"
        />
      </div>

      <div>
        <label className="block font-medium">Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as TaskPriority)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
};

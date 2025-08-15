import { useState, useEffect } from 'react';
import { useTaskContext } from '../hooks/useTaskContext';
import type { TaskPriority, Task } from '../types/task';
import { generateId } from '../utils/generateId';

interface Props {
  editingTask: Task | null;
  onFinishEdit: () => void;
}

export const TaskForm = ({ editingTask, onFinishEdit }: Props) => {
  const { dispatch } = useTaskContext();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<TaskPriority>('medium');

  // Autofill fields when editing
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    }
  }, [editingTask]);

  // Handle form submit (Add or Update)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;

    const now = new Date();

    if (editingTask) {
      dispatch({
        type: 'UPDATE',
        payload: {
          ...editingTask,
          title: title.trim(),
          description: description.trim(),
          priority,
          updatedAt: now,
        },
      });
      onFinishEdit();
    } else {
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
    }

    // Reset fields
    setTitle('');
    setDescription('');
    setPriority('medium');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mb-6"
      aria-label="Task form"
    >
      {/* Title Field */}
      <div>
        <label htmlFor="title" className="block font-medium">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="e.g., Fix login bug"
          autoComplete="off"
          required
        />
      </div>

      {/* Description Field */}
      <div>
        <label htmlFor="description" className="block font-medium">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded resize-none"
          rows={3}
          placeholder="Optional: add details, links, or notes..."
        />
      </div>

      {/* Priority Field */}
      <div>
        <label htmlFor="priority" className="block font-medium">
          Priority
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as TaskPriority)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">
          Default is Medium — change if needed.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        aria-label={editingTask ? 'Update Task' : 'Add Task'}
      >
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

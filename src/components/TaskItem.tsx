import { memo } from 'react';
import type { Task } from '../types/task';

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
}

export const TaskItem = memo(({ task, onEdit }: Props) => {
  const toggleStatus = () => {
    // ... same as before
  };

  const removeTask = () => {
    // ... same as before
  };

  return (
    <div className="flex justify-between items-center border p-4 rounded shadow-sm mb-2">
      <div>
        <h3
          className={`font-medium ${
            task.status === 'completed' ? 'line-through text-gray-400' : ''
          }`}
        >
          {task.title}
        </h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-xs mt-1">Priority: {task.priority}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={toggleStatus}>✓</button>
        <button onClick={removeTask}>🗑</button>
        <button onClick={() => onEdit(task)}>✏️</button>
      </div>
    </div>
  );
});

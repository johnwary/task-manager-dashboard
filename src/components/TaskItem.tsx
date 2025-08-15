import { memo } from 'react';
import type { Task } from '../types/task';
import { useTaskContext } from '../hooks/useTaskContext';

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
}

export const TaskItem = memo(({ task, onEdit }: Props) => {
  const { dispatch } = useTaskContext();

  const handleToggleStatus = () => {
    dispatch({ type: 'TOGGLE', payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'REMOVE', payload: task.id });
  };

  const handleEdit = () => {
    onEdit(task);
  };

  const isCompleted = task.status === 'completed';

  return (
    <div
      className="flex justify-between items-center border p-4 rounded shadow-sm mb-2"
      role="group"
      aria-labelledby={`task-${task.id}-title`}
    >
      <div>
        <h3
          id={`task-${task.id}-title`}
          className={`font-medium ${
            isCompleted ? 'line-through text-gray-400' : ''
          }`}
        >
          {task.title}
        </h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-xs mt-1">
          Priority: <span className="capitalize">{task.priority}</span>
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleToggleStatus}
          className="text-sm px-3 py-1 border rounded bg-blue-100 hover:bg-blue-200"
          aria-label={isCompleted ? 'Mark as active' : 'Mark as complete'}
        >
          {isCompleted ? 'Activate' : 'Complete'}
        </button>

        <button
          onClick={handleDelete}
          className="text-sm px-3 py-1 border rounded bg-red-100 hover:bg-red-200"
          aria-label="Delete task"
        >
          Delete
        </button>

        <button
          onClick={handleEdit}
          className="text-sm px-3 py-1 border rounded bg-yellow-100 hover:bg-yellow-200"
          aria-label="Edit task"
        >
          Edit
        </button>
      </div>
    </div>
  );
});

import { memo } from 'react';
import type { Task } from '../types/task';
import { useTaskContext } from '../hooks/useTaskContext';

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
}

export const TaskItem = memo(({ task, onEdit }: Props) => {
  const { dispatch } = useTaskContext();

  const toggleStatus = () => {
    dispatch({ type: 'TOGGLE', payload: task.id });
  };

  const removeTask = () => {
    dispatch({ type: 'REMOVE', payload: task.id });
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
        <p className="text-xs mt-1">
          Priority: <span className="capitalize">{task.priority}</span>
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={toggleStatus}
          className="text-sm px-3 py-1 border rounded bg-blue-100 hover:bg-blue-200"
        >
          {task.status === 'active' ? 'Complete' : 'Activate'}
        </button>
        <button
          onClick={removeTask}
          className="text-sm px-3 py-1 border rounded bg-red-100 hover:bg-red-200"
        >
          Delete
        </button>
        <button
          onClick={() => onEdit(task)}
          className="text-sm px-3 py-1 border rounded bg-yellow-100 hover:bg-yellow-200"
        >
          Edit
        </button>
      </div>
    </div>
  );
});

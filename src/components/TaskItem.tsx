import { memo } from 'react';
import type { Task } from '../types/task';
import { useTaskContext } from '../hooks/useTaskContext';
import { TaskCard } from './Card/TaskCard'; // ✅ adjust import path if needed

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
    <TaskCard>
      <TaskCard.Header>
        <h3
          id={`task-${task.id}-title`}
          className={`font-medium ${
            isCompleted ? 'line-through text-gray-400' : ''
          }`}
        >
          {task.title}
        </h3>
      </TaskCard.Header>

      <TaskCard.Body>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-xs mt-1">
          Priority: <span className="capitalize">{task.priority}</span>
        </p>
      </TaskCard.Body>

      <TaskCard.Actions>
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
      </TaskCard.Actions>
    </TaskCard>
  );
});

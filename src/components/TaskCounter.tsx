import { useTaskContext } from '../hooks/useTaskContext';

export const TaskCounter = () => {
  const { state } = useTaskContext();
  const total = state.tasks.length;
  const completed = state.tasks.filter((t) => t.status === 'completed').length;
  const remaining = total - completed;

  return (
    <div className="text-sm text-gray-600 mt-4" aria-label="Task summary">
      <span className="mr-4">Total: {total}</span>
      <span className="mr-4">Completed: {completed}</span>
      <span>Remaining: {remaining}</span>
    </div>
  );
};

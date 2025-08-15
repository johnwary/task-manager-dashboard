import { useTaskContext } from '../hooks/useTaskContext';

export const TaskCounter = () => {
  const { state } = useTaskContext();
  const total = state.tasks.length;
  const completed = state.tasks.filter((t) => t.status === 'completed').length;

  return (
    <div className="text-sm text-gray-600 mt-4">
      <span className="mr-4">Total: {total}</span>
      <span className="mr-4">Completed: {completed}</span>
      <span>Remaining: {total - completed}</span>
    </div>
  );
};

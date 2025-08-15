import { useTaskContext } from '../hooks/useTaskContext';
import { TaskItem } from './TaskItem';

export const TaskList = () => {
  const { state } = useTaskContext();
  const { tasks, filter, search } = state;

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === 'all' || task.status === filter;
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filteredTasks.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No tasks found.</p>;
  }

  return (
    <div className="mt-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

import { useTaskContext } from '../hooks/useTaskContext';
import { TaskItem } from './TaskItem';
import type { Task } from '../types/task';

export const TaskList = ({
  onEditTask,
}: {
  onEditTask: (task: Task) => void;
}) => {
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
        <TaskItem key={task.id} task={task} onEdit={onEditTask} />
      ))}
    </div>
  );
};

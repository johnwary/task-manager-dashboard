import { useTaskContext } from '../hooks/useTaskContext';
import { TaskItem } from './TaskItem';
import { EmptyState } from './EmptyState';
import type { Task } from '../types/task';

interface Props {
  onEditTask: (task: Task) => void;
}

export const TaskList = ({ onEditTask }: Props) => {
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
    return <EmptyState />;
  }

  return (
    <div className="mt-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={onEditTask} />
      ))}
    </div>
  );
};

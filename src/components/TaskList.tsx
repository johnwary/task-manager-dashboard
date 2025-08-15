import { useMemo } from 'react';
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

  // ✅ Efficient filtering with useMemo
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesFilter = filter === 'all' || task.status === filter;
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [tasks, filter, search]);

  if (filteredTasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="mt-4 space-y-2" aria-label="Task List">
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} onEdit={onEditTask} />
        </li>
      ))}
    </ul>
  );
};

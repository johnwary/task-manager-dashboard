import { TaskList } from './TaskList';
import { withLoading } from '../hoc/withLoading';

export const EnhancedTaskList = withLoading(TaskList);

import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export const useTaskContext = () => useContext(TaskContext);

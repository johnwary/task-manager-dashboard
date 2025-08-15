import { createContext } from 'react';
import type { Task } from '../types/task';

export type Filter = 'all' | 'active' | 'completed';

export type State = {
  tasks: Task[];
  search: string;
  filter: Filter;
};

export type Action =
  | { type: 'ADD'; payload: Task }
  | { type: 'UPDATE'; payload: Task }
  | { type: 'REMOVE'; payload: string }
  | { type: 'TOGGLE'; payload: string }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_FILTER'; payload: Filter }
  | { type: 'SET_INITIAL_TASKS'; payload: Task[] };

export const initialState: State = {
  tasks: [],
  search: '',
  filter: 'all',
};

export const TaskContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

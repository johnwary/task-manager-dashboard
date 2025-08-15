import {
  useEffect,
  useReducer,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  TaskContext,
  initialState,
  type State,
  type Action,
} from './TaskContext';
import type { Task } from '../types/task';

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      return { ...state, tasks: [action.payload, ...state.tasks] };
    case 'UPDATE':
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    case 'REMOVE':
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    case 'TOGGLE':
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload
            ? {
                ...t,
                status: t.status === 'active' ? 'completed' : 'active',
                updatedAt: new Date(),
              }
            : t
        ),
      };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_INITIAL_TASKS':
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
}

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loaded, setLoaded] = useState(false); // 👈 New

  // ✅ Load tasks from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Task[];
        dispatch({ type: 'SET_INITIAL_TASKS', payload: parsed });
      } catch {
        console.error('Failed to parse localStorage');
      }
    }
    setLoaded(true); // 👈 Only show UI after this
  }, []);

  // ✅ Save to localStorage on task updates
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }, [state.tasks, loaded]);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  if (!loaded) return null; // 👈 Prevent rendering app until tasks are loaded

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

import { useReducer, useMemo, type ReactNode } from 'react';
import {
  TaskContext,
  initialState,
  type State,
  type Action,
} from './TaskContext';

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
    default:
      return state;
  }
}

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

import { useTaskContext } from '../hooks/useTaskContext';

export const SearchBar = () => {
  const { state, dispatch } = useTaskContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SEARCH', payload: e.target.value });
  };

  return (
    <input
      type="text"
      value={state.search}
      onChange={handleChange}
      placeholder="Search tasks..."
      className="w-full border px-3 py-2 rounded mb-4"
    />
  );
};

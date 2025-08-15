import { useTaskContext } from '../hooks/useTaskContext';

const filters = ['all', 'active', 'completed'] as const;

export const FilterTabs = () => {
  const { state, dispatch } = useTaskContext();

  const handleClick = (filter: (typeof filters)[number]) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <div className="flex gap-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleClick(filter)}
          className={`px-3 py-1 rounded border text-sm capitalize ${
            state.filter === filter
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

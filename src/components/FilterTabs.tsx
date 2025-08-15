import { useTaskContext } from '../hooks/useTaskContext';

const filters = ['all', 'active', 'completed'] as const;

export const FilterTabs = () => {
  const { state, dispatch } = useTaskContext();

  const handleClick = (filter: (typeof filters)[number]) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <div className="flex gap-2 mb-4" role="tablist" aria-label="Task filters">
      {filters.map((filter) => {
        const isActive = state.filter === filter;
        return (
          <button
            key={filter}
            onClick={() => handleClick(filter)}
            role="tab"
            aria-selected={isActive}
            className={`px-3 py-1 rounded border text-sm capitalize transition ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

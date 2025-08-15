import { useState } from 'react';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { SearchBar } from './components/SearchBar';
import { FilterTabs } from './components/FilterTabs';
import { TaskCounter } from './components/TaskCounter';
import type { Task } from './types/task';

function App() {
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <header>
        <h1 className="text-2xl font-bold mb-6">Task Dashboard</h1>
      </header>
      <section>
        {' '}
        <TaskForm
          editingTask={editingTask}
          onFinishEdit={() => setEditingTask(null)}
        />
        <SearchBar />
        <FilterTabs />
        <TaskCounter />
        <TaskList onEditTask={setEditingTask} />
      </section>
    </main>
  );
}

export default App;

import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <>
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">Task Dashboard</h1>
        <TaskForm />
        <SearchBar />
        <TaskList />
      </main>
    </>
  );
}

export default App;

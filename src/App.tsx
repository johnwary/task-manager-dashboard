import { TaskList } from './components/TaskList';

function App() {
  return (
    <>
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>
        <TaskList />
      </main>
    </>
  );
}

export default App;

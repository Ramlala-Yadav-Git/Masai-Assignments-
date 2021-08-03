import './App.css';
import { TodoList } from "./Components/TodoList";
import { Counter } from "./Components/Counter";
function App() {
  return (
    <div className="App">
      <h1>Redux State</h1>
      {/* <Counter /> */}
      <TodoList />
    </div>
  );
}

export default App;

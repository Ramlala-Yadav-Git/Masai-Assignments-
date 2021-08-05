import './App.css';
import { Login } from "./Components/Login"
import { TodosList } from "./Components/Todos/todos"
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <TodosList />
    </div>
  );
}

export default App;

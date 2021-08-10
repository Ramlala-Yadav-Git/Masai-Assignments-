import './App.css';
import FetchData from './Components/FetchData';
import { Count } from "./Components/count"
import { GithubUser } from "./Components/GithubUser"
import { Ready } from './Components/Ready';
import { TodoList } from "./Components/Todo"

function App() {


  return (
    <div className="App">
      <TodoList />
      <Ready />
      <FetchData />
      <Count />
      <GithubUser />

    </div>
  );
}

export default App;

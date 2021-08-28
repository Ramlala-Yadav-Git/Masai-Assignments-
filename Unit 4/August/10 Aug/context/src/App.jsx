import './App.css';
import FetchData from './Components/FetchData';
import { Count } from "./Components/count"
import { GithubUser } from "./Components/GithubUser"
import { Ready } from './Components/Ready';
import { TodoList } from "./Components/Todo"
import { Merge } from "./Components/Merge"
import { SearchBarApp } from './Components/SearchBarApp';

function App() {


  return (
    <div className="App">
      {/* <TodoList /> */}
      {/* <Merge /> */}
      {/* <Ready /> */}
      {/* <FetchData /> */}
      {/* <Count /> */}
      {/* <GithubUser /> */}
      <SearchBarApp />

    </div>
  );
}

export default App;

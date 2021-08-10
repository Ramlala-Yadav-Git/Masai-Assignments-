import './App.css';
import FetchData from './Components/FetchData';
import { Count } from "./Components/count"
import { GithubUser } from "./Components/GithubUser"
function App() {


  return (
    <div className="App">
      <FetchData />
      <Count />
      <GithubUser />
    </div>
  );
}

export default App;

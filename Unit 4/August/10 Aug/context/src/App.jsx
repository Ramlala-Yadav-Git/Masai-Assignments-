import './App.css';
import FetchData from './Components/FetchData';
import { Count } from "./Components/count"
import { GithubUser } from "./Components/GithubUser"
import { Ready } from './Components/Ready';

function App() {


  return (
    <div className="App">
      <Ready />
      <FetchData />
      <Count />
      <GithubUser />

    </div>
  );
}

export default App;

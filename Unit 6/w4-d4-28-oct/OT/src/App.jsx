import './App.css';
import { data } from "./components/data"
import { Comments } from "./components/comments"
import styles from "./components/comments.module.css"

function App() {
  return (
    <div className={styles.container}>
      <Comments {...data} />
    </div>
  );
}

export default App;

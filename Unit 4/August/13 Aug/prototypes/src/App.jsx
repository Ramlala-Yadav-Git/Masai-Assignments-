import { useState } from 'react';
import './App.css';
import { Pin } from "./Prototypes/Pin/Index"
function App() {
  const [text, setText] = useState("")
  return (
    <div className="App">
      <h1>Prototypes</h1>

      <Pin length={4} perBox={1} onChange={(e) => setText(e)} text={text} />
      <h4 style={{ fontSize: "30px", color: "gray", textTransform: "uppercase" }}>{text}</h4>
    </div>
  );
}

export default App;

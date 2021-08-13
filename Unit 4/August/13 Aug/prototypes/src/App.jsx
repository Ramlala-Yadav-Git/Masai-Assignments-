import { useState } from 'react';
import './App.css';
import { Pin } from "./Prototypes/Pin/Index"
function App() {
  const [text, setText] = useState("")
  return (
    <div className="App">
      <h1>Credit Card OTP</h1>

      <Pin length={5} perBox={5} onChange={(e) => setText(e)} text={text} />
      {/* <h4 style={{ fontSize: "30px", color: "gray", textTransform: "uppercase" }}>{text}</h4> */}
    </div>
  );
}

export default App;

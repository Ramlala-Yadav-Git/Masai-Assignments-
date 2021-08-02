import logo from './logo.svg';
import './App.css';
import { store } from "./store/store"
import { addCount, decCount } from "./store/action"
import { useState } from "react"
import { Calculator1 } from "./Components/CalculatorFirst"
import { Calculator2 } from "./Components/Calculator2"

function App() {


  return (
    <div >

      {/* <Calculator1 /> */}
      <Calculator2 />

    </div>
  );
}

export default App;

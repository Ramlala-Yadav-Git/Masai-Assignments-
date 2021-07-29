import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from "../src/Components/Navbar/index"
import { Home } from "./Components/Navbar/Home"
import { Contact } from "./Components/Navbar/Contact"
import { Services } from "./Components/Navbar/Services"
import { About } from "./Components/Navbar/About"
import { Login } from "./Components/Navbar/Login"


function App() {
  return (
    <BrowserRouter>

      <Navbar />

    </BrowserRouter>
  )
}

export default App
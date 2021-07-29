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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
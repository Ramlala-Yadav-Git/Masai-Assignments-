import React from 'react'
import { Switch, Route, Link } from "react-router-dom"

function NavBar() {

  return (
    <>
      <ul>
        <li><Link role='link' to="/">Home</Link></li>
        <li><Link role='link' to="/contact">Contact</Link></li>
        <li><Link role='link' to="/about-us">About</Link></li>
        <li><Link role='link' to="/services">Services</Link></li>
        <li><Link role='link' to="/login">Login</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <h2>Home Page</h2>
        </Route>
        <Route path="/contact">
          <h2>Contact Page</h2>
        </Route>
        <Route path="/services">
          <h2>Services Page</h2>
        </Route>
        <Route path="/about-us">
          <h2>About Page</h2>
        </Route>
        <Route path="/login">
          <h2>Login Page</h2>
        </Route>
      </Switch>
    </>
  )
}

export default NavBar



import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
  const links = [
    {
      link: "/",
      name: "Home Page"
    },
    {
      link: "/contact",
      name: "Contact Page"
    },
    {
      link: "/about-us",
      name: "About Page"
    },
    {
      link: "/services",
      name: "Services Page"
    },
    {
      link: "/login",
      name: "Login"
    },
  ]
  return (
    <>
      <ul>
        {
          links.map((el, i) => {
            return <li key={i}>
              <Link to={el.link}>{el.name}</Link>
            </li>
          })
        }</ul>
    </>
  )
}

export default NavBar



import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
import Navbar from './index'

beforeEach(() => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  )
})

it('home link', async () => {
  const home = screen.getByText(/Home/i)
  userEvent.click(home)
  expect(window.location.pathname).toBe('/')
})

it('about link', async () => {
  const About = screen.getByText(/About/i)
  userEvent.click(About)
  expect(window.location.pathname).toBe('/about-us')
})

it('contact link', async () => {
  const Contact = screen.getByText(/Contact/i)
  userEvent.click(Contact)
  expect(window.location.pathname).toBe('/contact')
})

it('services link', async () => {
  const Services = screen.getByText(/Services/i)
  userEvent.click(Services)
  expect(window.location.pathname).toBe('/services')
})

it('login link', async () => {
  const Login = screen.getByText(/Login/i)
  userEvent.click(Login)
  expect(window.location.pathname).toBe('/login')
})

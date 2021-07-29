import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
import App from './App'

beforeEach(() => {
  render(<App />)
})


it('home link', async () => {
  const Home = screen.getByRole('link', { name: 'Home' })
  userEvent.click(Home)
  expect(screen.getByText('Home Page')).toBeInTheDocument('Home Page')
})

it('about link', async () => {
  const About = screen.getByRole('link', { name: 'About' })
  userEvent.click(About)
  expect(screen.queryByText('Home Page')).not.toBeInTheDocument()
  expect(screen.getByText(/About Page/i)).toBeInTheDocument()
})

it('contact link', async () => {
  const Contact = screen.getByRole('link', { name: 'Contact' })
  userEvent.click(Contact)
  expect(screen.queryByText('Home Page')).not.toBeInTheDocument()
  expect(screen.getByText(/Contact Page/i)).toBeInTheDocument()
})

it('services link', async () => {
  const Services = screen.getByRole('link', { name: 'Services' })
  userEvent.click(Services)
  expect(screen.queryByText('Home Page')).not.toBeInTheDocument()
  expect(screen.getByText(/Services Page/i)).toBeInTheDocument()
})

it('login link', async () => {
  const Login = screen.getByRole('link', { name: 'Login' })
  userEvent.click(Login)
  expect(screen.queryByText('Home Page')).not.toBeInTheDocument()
  expect(screen.getByText(/Login Page/i)).toBeInTheDocument()
})

import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import TaskForm from './TaskForm'
import TaskList from './TaskList'


export default function TodoApp() {

  const [todos, setTodos] = useState([])
  const [err, setErr] = useState(false)
  const handleSubmit = (title) => {
    const payload = {
      title,
      id: todos.length + 1,

    }
    //setTodos([...todos, payload])
    setErr(false)
    fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(res => {
      if (res.status >= 200 && res.status <= 299) {
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    })
      .then(res => setTodos([...todos, res]))
      .catch(err => {
        return setErr(true)
      })
  }

  useEffect(() => {
    fetch('/tasks')
      .then(res => {
        return res.json()
      })
      .then(res => {
        setTodos(res)
      })
      .catch((error) => {
        setErr(true)
      })
  }, [])

  return (
    <Router>
      <div className="container-fluid text-center">
        {
          err && <div className="error">
            Something went wrong
          </div>

        }
        <header className="p-2">
          <h1>Tasks</h1>
          <TaskForm onSubmit={handleSubmit} />
        </header>
        <section className="mt-2">
          <TaskList todos={todos} />
        </section>
      </div>
    </Router>
  )

}
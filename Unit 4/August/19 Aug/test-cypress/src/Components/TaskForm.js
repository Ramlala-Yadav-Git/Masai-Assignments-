import React, { useState } from 'react'

const TaskForm = props => {
  const [title, setTitle] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(title)
    setTitle("")
  }


  return <>
    <form onSubmit={onSubmit}>
      <input
        type='text'

        autoFocus
        className="p-2 rounded border task-input"
        placeholder="Add something?"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

    </form>
  </>
}
export default TaskForm
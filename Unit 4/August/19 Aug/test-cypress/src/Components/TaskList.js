import React from 'react'

const TaskItem = props =>
  <li>
    <div >
      <label>
        {props.title}
      </label>
    </div>
  </li>

const TaskList = props =>
  <ul className="task-list" style={{ listStyle: "none", fontWeight: "bold" }}>
    {props.todos.map(todo => <TaskItem key={todo.id} title={todo.title} />)}
  </ul>

export default TaskList
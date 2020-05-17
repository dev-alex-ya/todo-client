import React from 'react'
import classes from './TodoElement.module.css'

const TodoElement = (props) => {
  const cls = [classes.Todo]
  
  if (props.isChecked) {
    cls.push(classes.checked)
  }
  
  return (
    <li className={cls.join(' ')}>
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={props.handleCheck}
      />
      <span>{props.text}</span>
      <button 
        className="del"
        onClick={props.handleDelete}
      >
        Удалить
      </button>
    </li>
  )
}

export default TodoElement;
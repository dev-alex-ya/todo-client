import React from 'react';
import './TodoList.css';
import TodoElement from './TodoElement/TodoElement';

const TodoList = (props) => {
  return(
    <ul className="todo-list">
    {
      props.todoList.map((todo, index) => {
        return (
          <TodoElement
            isChecked={todo.isChecked}
            text={todo.text}
            key={index}
            handleCheck={props.onChange.bind(this, index)}
            handleDelete={props.handleDelete.bind(this, index)}
          />
        )
      })
    }
    </ul>
  );
};

export default TodoList;
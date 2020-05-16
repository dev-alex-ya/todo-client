import React from 'react';
import './TodoElement.css';

const TodoElement = (props) => {
    return(
        <li>
            <span>{props.text}</span>
            <button 
                className="del"
                onClick={props.handleDelete}
            >
                Удалить
            </button>
        </li>
    );
};

export default TodoElement;
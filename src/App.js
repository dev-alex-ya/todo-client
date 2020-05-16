import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';

class App extends Component {

  state = {
    formText: '',
    todoList: [
      {text: "Создать стили для этого списка"},
      {text: "Заставить это работать"},
      {text: "Создать REST API для список дел"},
    ],

  }

  handleAdd = (e) => {
    e.preventDefault();
    const newTodo = this.state.formText;
    const todoList = [...this.state.todoList, {text: newTodo}];

    this.setState({
      todoList
    });
    this.setState({
      formText: ''
    });
  };

  handleChange = (e) => {
    this.setState({formText: e.target.value});
  }

  handleDelete = (index) => {
    const todoList = [...this.state.todoList];

    todoList.splice(index, 1);
    this.setState({
      todoList
    });
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <form className="form" >
            <input type="text" value={this.state.formText} onChange={this.handleChange} />
            <button className="btnAdd" onClick={this.handleAdd}>Добавить</button>
          </form>
          <TodoList
            todoList={this.state.todoList}
            handleDelete={this.handleDelete.bind(this)}
          />
        </div>
        
      </div>
    );
  }
  
}

export default App;

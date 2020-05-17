import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';

class App extends Component {

  state = {
    formText: '',
    todoList: [
      {isChecked: false, text: "Создать стили для этого списка"},
      {isChecked: false, text: "Заставить это работать"},
      {isChecked: false, text: "Создать REST API для список дел"},
    ],
  }

  handleAdd = (e) => {
    e.preventDefault();
    
    const todoList = [...this.state.todoList, {isChecked: false, text: this.state.formText }];

    this.setState({
      formText: '',
      todoList
    })
  }

  handleChange = (e) => {
    this.setState({formText: e.target.value});
  }

  handlerCheck = (index) => {
    
    const todoList = this.state.todoList

    todoList[index].isChecked = !todoList[index].isChecked

    this.setState({todoList})
    
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
            isDoneList={false}
            onChange={this.handlerCheck.bind(this)}
            todoList={this.state.todoList}
            handleDelete={this.handleDelete.bind(this)}
          />
          <TodoList
            isDoneList={true}
            onChange={this.handlerCheck.bind(this)}
            todoList={this.state.todoList}
            handleDelete={this.handleDelete.bind(this)}
          />
        </div>
        
      </div>
    );
  }
  
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList'
import { Todo } from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [{text:"Learn React", priority:5, dueDate: new Date() },
    {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
    {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }], text: '', priority: '', dueDate:''};
    this.handleChange = this.handleChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDueDateChange = this.handleDueDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className='App'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h2>TODO APP</h2>
          <form class ="w3-container" onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input class = "w3-input"
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <label htmlFor="priority-todo">
              Priority:
            </label>
            <input class = "w3-input"
              id="priority-todo"
              type="number"
              onChange={this.handlePriorityChange}
              value={this.state.priority}
            />
            <label htmlFor="dueDate-todo">
              Due Date:
            </label>
            <input class = "w3-input"
              id="dueDate-todo"
              type="Date"
              onChange={this.handleDueDateChange}
              value={this.state.dueDate}
            />
            <p><button class="w3-button w3-light-blue">
              Add #{this.state.items.length + 1}
            </button></p>
            <TodoList todoList={this.state.items} />
          </form>
        </header>
        
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handlePriorityChange(e){
    this.setState({ priority: e.target.value});
  }

  handleDueDateChange(e){
    this.setState({ dueDate: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate:this.state.dueDate
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

export default App;

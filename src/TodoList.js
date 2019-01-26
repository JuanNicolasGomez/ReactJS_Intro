import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        const todos = this.props.todoList.map((todo) => 
        <Todo text = {todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
        );
        return (  
          //Add your code here to represent a TODO
          <ul class="w3-ul w3-card" >{todos} </ul> 
        );
    }

}
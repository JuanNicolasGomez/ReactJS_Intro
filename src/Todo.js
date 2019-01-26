import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
          //Add your code here to represent a TODO
          <p>Task: {this.props.text}, Priority: {this.props.priority.toString()}, Date: {this.props.dueDate.toString()}}  </p> 
        );
    }

}


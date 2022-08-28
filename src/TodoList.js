import React, { Component } from 'react'
import Table from './components/Table.jsx'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={name:"aman"};

  }

  render() {
    return (
      <div>
        <Table/>
      </div>
    )
  }
}

export default TodoList;

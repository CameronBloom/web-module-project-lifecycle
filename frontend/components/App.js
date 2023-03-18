import React from 'react'
import axios from 'axios'

import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      error: "",
      newTodo: ""
    }
    this.getTodos = this.getTodos.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  // runs after first render
  componentDidMount() {
    this.getTodos();

  }

  // helper functions
  getTodos = () => {
    axios.get(URL)
      .then((res) => {
        this.setState({ ...this.state, todos: res.data.data })
        return res.data.data;
      })
      // .then((res) => { console.log(res) })
      .catch(err => {
        console.log(err)
        this.setState({ ...this.state, error: err.response.data.message })
      })
  }

  handleInputChange(event) {
    const { value } = event.target;
    this.setState({ ...this.state, newTodo: value });
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div className="error">{ this.state.error ? this.state.error : "" }</div>
        <TodoList todos={ this.state.todos }/>
        <Form newTodo={ this.state.newTodo } handleInputChange={ this.handleInputChange } />
      </div>

    )

  }
}
